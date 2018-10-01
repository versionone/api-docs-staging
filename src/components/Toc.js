import React, { Fragment } from 'react'
import SearchIcon from '@atlaskit/icon/glyph/search';
import VidPlayIcon from '@atlaskit/icon/glyph/vid-play';
import {
  default as Navigation,
  Skeleton,
  AkContainerTitle as ContainerTitle,
  AkGlobalItem as GlobalItem,
  AkNavigationItemGroup as NavigationGroup,
  AkNavigationItem as NavigationItem,
} from '@atlaskit/navigation'
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group'
import Tooltip from '@atlaskit/tooltip'
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog'
import Avatar from '@atlaskit/avatar'
import FieldText from '@atlaskit/field-text'
import axios from 'axios'
import logo from './../images/logo.png'

const Logo = () => <img alt="nucleus" src={logo} />

const globalTheme = {
  background: {
    primary: '#31363e',
    secondary: '#0747A6',
    tertiary: '#0747A6',
  },
  text: '#DEEBFF',
  subText: '#B3D4FF',
  keyline: 'rgba(9, 30, 66, 0.42)',
  item: {
    default: {
      background: 'transparent',
    },
    hover: {
      background: 'rgba(9, 30, 66, 0.42)',
    },
    active: {
      background: '#728fcb',
    },
    selected: {
      background: '#728fcb',
    },
    focus: {
      outline: '#4C9AFF',
    },
    dragging: {
      background: 'black',
    },
  },
  dropdown: {
    default: {
      background: 'rgba(9, 30, 66, 0.42)',
    },
    hover: {
      background: 'rgba(9, 30, 66, 0.48)',
    },
    active: {
      background: '#2684FF',
    },
    selected: {
      background: 'rgba(9, 30, 66, 0.25)',
    },
    focus: {
      outline: '#4C9AFF',
    },
  },
}

const orderedGroups = require('./../markdown-pages/order')

class ComplexNavigation extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      selected: '',
      modals: [],
      url: 'https://V1Host/V1Instance',
      token: '1.11xea1111cT5555IIGIS+LPfJY=',
      avatarSrc: localStorage.getItem('avatarSrc') || '',
    }
  }

  close = () => this.setState({ modals: [] })
  open = () => this.setState({ modals: [1] })

  onUrlChange = url => {
    this.setState({ url })
  }
  onTokenChange = token => {
    this.setState({ token })
  }
  onAvatarSrcChange = response => { }

  onSave = () => {
    const { url, token } = this.state

    const [protocol, rest] = url.split('://')
    const isHttps = protocol.indexOf('s') > 0
    const port = isHttps ? 443 : 80

    const [host, instance] = rest.split('/')

    const data = {
      token,
      host,
      instance,
      port,
      isHttps,
    }

    axios({
      url: 'http://localhost:3000',
      method: 'post',
      data: data,
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        const avatarSrc = 'data:image/gif;base64,' + response.data.src
        localStorage.setItem('avatarSrc', avatarSrc)
        this.setState({
          avatarSrc,
        })
        this.close()
      })
      .catch(error => {
        console.log(error)
      })
  }

  static defaultProps = {
    globalPrimaryIcon: <Logo label="Main icon" size="large" />,

    containerHeaderComponent: () => (
      <ContainerTitle
        href="#"
        icon={<Logo />}
        text="VersionOne"
        subText="API docs"
      />
    ),
  }

  render() {
    const ContainerHeader = this.props.containerHeaderComponent || (() => null)

    const manyNavigationItemGroups = orderedGroups.map((group, i) => {
      const groupName = group.title
      const path = group.path

      let sections = []
      try {
        sections = require(`./../markdown-pages/${path}/order`)
      } catch (e) { }

      const childrenSections = sections.length > 0 && (
        <NavigationGroup>
          {sections.map((section, j) => {
            const sectionName = section.title
            const sectionPath = section.path
            return (
              <NavigationItem
                key={j}
                text={sectionName}
                href={`#${path}-${sectionPath}`}
                onClick={() => {
                  this.setState({ selected: `${path}-${sectionPath}` })
                }}
                isSelected={this.state.selected === `${path}-${sectionPath}`}
              />
            )
          })}
        </NavigationGroup>
      )

      return (
        <div className="" key={path}>
          <NavigationItem
            text={groupName}
            href={`#${path}`}
            onClick={() => {
              this.setState({ selected: `${path}` })
            }}
            isSelected={this.state.selected === `${path}`}
          //icon={childrenSections && <ChevronDownIcon />}
          />
          {childrenSections}
        </div>
      )
    })

    const Header = () => (
      <div className={this.props.isOpen ? '' : 'hidden'}>
        <ContainerHeader />
      </div>
    )

    return (
      <Fragment>
        <Navigation
          globalTheme={globalTheme}
          containerHeaderComponent={Header}
          globalPrimaryIcon={!this.props.isOpen && this.props.globalPrimaryIcon}
          globalPrimaryItemHref="//"
          globalSecondaryActions={[
            <GlobalItem onClick={this.open}>
              <Tooltip position="right" content="User profile">
                <Avatar
                  src={this.state.avatarSrc}
                  size="small"
                  borderColor="transparent"
                />
              </Tooltip>
            </GlobalItem>,
          ]}
          isOpen={this.props.isOpen}
          onResize={this.props.resize}
          globalPrimaryActions={[
            <GlobalItem size="medium">
              <Tooltip position="right" content="Search">
                <SearchIcon
                  label="Search icon"
                  secondaryColor="inherit"
                  size="medium"
                />
              </Tooltip>
            </GlobalItem>,
            <GlobalItem size="medium">
              <Tooltip position="right" content="Community Site">
                <PeopleGroupIcon
                  onClick={() =>
                    (window.location =
                      'https://community.versionone.com/VersionOne_Connect/Developer_Library/Sample_Code/Explore_API_Endpoints')
                  }
                  label="Community icon"
                  secondaryColor="inherit"
                  size="medium"
                />
              </Tooltip>
            </GlobalItem>,
            this.state.url && (
              <GlobalItem size="medium">
                <Tooltip position="right" content="Api Console">
                  <VidPlayIcon
                    onClick={() =>
                      (window.location =
                        this.state.url + "/apiconsole.mvc"
                      )
                    }
                    label="Api Console"
                    secondaryColor="inherit"
                    size="medium"
                  />
                </Tooltip>
              </GlobalItem>
            )
          ]}
        >
          <div className={this.props.isOpen ? 'links' : 'links hidden'}>
            {manyNavigationItemGroups}
          </div>
        </Navigation>
        <ModalTransition>
          {this.state.modals.map(id => (
            <ModalDialog
              key={id}
              heading="Settings"
              onClose={this.close}
              actions={[
                { text: 'Save', onClick: this.onSave },
                { text: 'Close', onClick: this.close },
              ]}
            >
              <div style={{ width: '100%' }}>
                <FieldText
                  label="VersionOne Url"
                  autoFocus={true}
                  name="url"
                  placeholder="https://V1Host/V1Instance"
                  value={this.state.url}
                  onChange={this.onUrlChange}
                  shouldFitContainerboolean={false}
                  compact={true}
                />
                <FieldText
                  label="Access Token"
                  name="token"
                  placeholder="1.E23ealNBIcT4YVweftGIS+LPfJY="
                  value={this.state.token}
                  onChange={this.onTokenChange}
                  shouldFitContainerboolean={true}
                />
              </div>
            </ModalDialog>
          ))}
        </ModalTransition>
      </Fragment>
    )
  }
}

export default class Nav extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 250)
  }

  render() {
    return this.state.isLoading ? (
      <Skeleton {...this.props} isCollapsed={false} globalTheme={globalTheme} />
    ) : (
        <ComplexNavigation {...this.props} />
      )
  }
}
