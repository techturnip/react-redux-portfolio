import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPortfolio } from '../../actions'
import PortfolioItemCard from './PortfolioItemCard'

class Portfolio extends Component {
  componentDidMount() {
    this.props.getPortfolio()
  }

  render() {
    const { portfolio } = this.props
    console.log(portfolio)

    return (
      <div className="portfolio container">
        <div className="portfolio-wrapper">
          <h2 className="white-text page-title">Portfolio</h2>
          {portfolio.map(item => (
            <PortfolioItemCard key={item.id} portfolioItem={item} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolioReducer.portfolio
})

const mapDispatchToProps = {
  getPortfolio
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)
