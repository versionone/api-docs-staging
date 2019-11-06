import React from 'react'
import groupBy from 'lodash.groupby'
import SdkCodeblock from './SdkCodeblock'
import BulkApiExampleBlock from './BulkApiExampleBlock'
const orderedGroups = require('./../markdown-pages/order')

const Groups = ({ data }) => {
  const allSections = data.allMarkdownRemark.edges.map(edge => {
    const { fileAbsolutePath, html } = edge.node
    const path = fileAbsolutePath.split('markdown-pages')[1]
    const trimmedPath = path.slice(1, path.length)
    const [group, section, filename, langFileName] = trimmedPath.split('/')

    return {
      group,
      section,
      filename,
      html,
      langFileName,
    }
  })

  const filteredSections = allSections
    .map(section => {
      return {
        ...section,
        sdkSubsections: allSections.filter(subSection => {
          return (
            subSection.group === section.group &&
            subSection.section === section.section &&
            Boolean(subSection.langFileName)
          )
        }),
      }
    })
    .filter(section => {
      return !Boolean(section.langFileName)
    })
    .filter(section => {
      return section.section !== 'index.md'
    })

  const sectionsByGroup = groupBy(filteredSections, 'group')

  const groups = orderedGroups.map(g => {
    const groupName = g.title
    const groupPath = g.path

    const group = sectionsByGroup[groupPath]

    const sectionByGroup = groupBy(group, 'section')

    let orderedSections = []
    try {
      orderedSections = require(`./../markdown-pages/${groupPath}/order`)
    } catch (e) {}

    const sectionsMarkup = orderedSections.map(section => {
      const sectionPath = section.path
      const sections = sectionByGroup[sectionPath]

      if (sections.find(s => s.filename !== 'index.md')) {
        return (
          <div
            key={`${groupPath}-${sectionPath}`}
            id={`${groupPath}-${sectionPath}`}
            className="section"
           >
            <BulkApiExampleBlock samples={sections} />
          </div>
        )
      }

      const indexSection = sections.find(
        section => section.filename === 'index.md'
      )

      if (indexSection === undefined) return;

      const { html, sdkSubsections } = indexSection

      return (
        <div
          key={`${groupPath}-${sectionPath}`}
          id={`${groupPath}-${sectionPath}`}
          className="section"
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SdkCodeblock sdkSubsections={sdkSubsections} />
        </div>
      )
    })

    const indexOfGroup = allSections.find(section => {
      return section.group === groupPath && section.section === 'index.md'
    })

    return (
      <div key={groupPath} className="group">
        <h1 id={groupPath}>{groupName}</h1>
        <div dangerouslySetInnerHTML={{ __html: indexOfGroup.html }} />
        {sectionsMarkup}
      </div>
    )
  })

  return groups
}

export default class Wrapper extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {}

  render() {
    return <Groups {...this.props} />
  }
}
