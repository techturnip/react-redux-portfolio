import React from 'react'

export default function PortfolioItem(props) {
  const { title, excerpt } = props.portfolioItem

  function createMarkup(content) {
    return { __html: content }
  }

  console.log(props.portfolioItem)
  return (
    <div className="portfolio-item-card indigo white-text card hoverable">
      <h5>{title.rendered}</h5>
      <div dangerouslySetInnerHTML={createMarkup(excerpt.rendered)} />
      <div className="action-btns" />
    </div>
  )
}
