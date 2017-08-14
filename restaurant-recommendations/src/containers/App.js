import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import RestaurantForm from '../components/RestaurantForm'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.addReview = this.addReview.bind(this)
    this.addRestaurant = this.addRestaurant.bind(this)
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  addReview(itemPayload) {
    this.setState({ reviews: this.state.reviews.concat(itemPayload) })
  }

  addRestaurant(itemPayload) {
    this.setState({ restaurants: this.state.restaurants.concat(itemPayload) })
  }

  render() {
    let restaurantComponents = this.state.restaurants.map((restaurant) => {
      return (
        <Restaurant key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick}/>
      )
    })

    let relevantReviews = this.state.reviews.filter((review) =>
      (this.state.selectedId === review.restaurant_id)
    )

    return(
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Restaurant</h1>
            {restaurantComponents}
          </div>
          <div className="small-9 columns">
            <h2>Reviews for {this.selectedRestaurant().name}</h2>
            <Reviews data={relevantReviews} />
          </div>
          <div className="small-9 columns">
            <h2>Submit a Review</h2>
            <ReviewForm id={this.state.selectedId} submitFunction={this.addReview}/>
          </div>
          <div className="small-9 columns">
            <h2>Submit a Restaurant</h2>
            <RestaurantForm submitFunction={this.addRestaurant}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
