import React from 'react'
import Tabs from '@atlaskit/tabs'

const Content = props => {
  const message =
    props.content ||
    "Sorry we don't have an example yet! Fork our repo and help us document"

  return (
    <div className="sdk-block">
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  )
}

export default props => {
  const tabs = ['bash', 'js', 'python', 'csharp']
    .map(lang => {
      const subSection = props.sdkSubsections.find(section => {
        return section.langFileName.indexOf(lang) >= 0
      })

      return {
        lang: lang,
        html: subSection.html,
      }
    })
    .map(block => ({
      label: block.lang === 'js' ? 'javascript' : block.lang,
      content: <Content content={block.html} />,
    }))

  return (
    <Tabs
      tabs={tabs}
      onSelect={(tab, index) => console.log('Selected Tab', index + 1)}
    />
  )
}
