import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftClick = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onRightClick = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const {length} = reviewsList
    if (index < length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const requiredReview = reviewsList[index]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img alt={requiredReview.username} src={requiredReview.imgUrl} />
        <div className="arrow-container">
          <button onClick={this.onLeftClick} type="button" testid="leftArrow">
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>

          <p className="username">{requiredReview.username}</p>
          <button onClick={this.onRightClick} type="button" testid="rightArrow">
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
        <p className="company-name">{requiredReview.companyName}</p>
        <p className="matter">{requiredReview.description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
