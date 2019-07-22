import React from 'react'

export default function PortfolioItem(props) {
  const { date, content, title, excerpt } = props.portfolioItem

  function createMarkup(content) {
    return { __html: content }
  }

  console.log(props.portfolioItem)
  return (
    <div className="portfolio-item-card indigo white-text card hoverable">
      <h5>{title.rendered}</h5>
      <div dangerouslySetInnerHTML={createMarkup(content.rendered)} />
    </div>
  )
}
