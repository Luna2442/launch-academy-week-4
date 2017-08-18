import React, {Component} from 'react';

class RestaurantForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      location: '',
      description: '',
      categories: '',
      image: '',
      website: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.submitRestaurant = this.submitRestaurant.bind(this)
    this.clearState = this.clearState.bind(this)
  }

  onChangeHandler(event){
    let stateName = event.target.name
    let value = event.target.value
    this.setState({[stateName]: value})
  }

  clearState() {
    this.setState({
      id: '',
      name: '',
      location: '',
      description: '',
      categories: '',
      image: '',
      website: ''
    })
  }

  submitRestaurant(event){
    event.preventDefault();
    let restaurantToSubmit = {
      id: this.state.name.replace(" ", "-"),
      name: this.state.name,
      location: this.state.location,
      description: this.state.description,
      categories: this.state.categories.split(","),
      image: this.state.image,
      website: this.state.website
    }

    this.props.submitFunction(restaurantToSubmit)
    this.clearState()
  }

  render() {
    return(
      <form onSubmit={this.submitRestaurant}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.onChangeHandler}/>

        <label htmlFor="location">Location</label>
        <input type="text" name="location" value={this.state.location} onChange={this.onChangeHandler}/>

        <label htmlFor="description">Description</label>
        <input type="text" name="description" value={this.state.description} onChange={this.onChangeHandler}/>

        <label htmlFor="categories">Categories</label>
        <input type="text" name="categories" value={this.state.categories} onChange={this.onChangeHandler}/>

        <label htmlFor="image">Image URL</label>
        <input type="text" name="image" value={this.state.image} onChange={this.onChangeHandler}/>

        <label htmlFor="website">Website URL</label>
        <input type="text" name="website" value={this.state.website} onChange={this.onChangeHandler}/>

        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default RestaurantForm;
