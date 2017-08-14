import React, {Component} from 'react';

class RestaurantForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      location: '',
      description: '',
      categories: [],
      image: '',
      website: '',
      errors: {}
    }
    this.handleItemChange = this.handleItemChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.validateFormSubmit = this.validateFormSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleItemChange(event){
    event.preventDefault();
    this.validateFormSubmit(event.target.value, event.target.name)
    let stateName = event.target.name
    let value = event.target.value
    this.setState({[stateName]: value})
  }

  validateFormSubmit(value, name) {
    if (value === '' || value === ' ') {
      let newError = { nameError: `${name} must be filled out.` }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.nameError
      this.setState({ errors: errorState })
      return true
    }
  }

  clearForm(){
    this.setState({
      id: '',
      name: '',
      location: '',
      description: '',
      categories: [],
      image: '',
      website: ''
    })
  }

  handleFormSubmit(event){
    event.preventDefault();

    let restaurantId = this.state.name.replace(" ", "-").toLowerCase()
    let restaurantCategories = this.state.categories.split(",")

    let formPayLoad = {
      id: restaurantId,
      name: this.state.name,
      location: this.state.location,
      description: this.state.description,
      categories: restaurantCategories,
      image: this.state.image,
      website: this.state.website
    }

    this.props.submitFunction(formPayLoad)

    this.clearForm()
  }


  render() {

    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form className="restaurant-form" id="restaurant-form" onSubmit={this.handleFormSubmit}>
        {errorDiv}

        <label htmlFor="name">Name</label>
        <input name="name" type="text" id="name" value={this.state.name} onChange={this.handleItemChange}/>

        <label htmlFor="location">Location</label>
        <input name="location" type="text" id="location" value={this.state.location} onChange={this.handleItemChange}/>

        <label htmlFor="description">Description</label>
        <input name="description" type="text" id="description" value={this.state.description} onChange={this.handleItemChange}/>

        <label htmlFor="categories">Categories</label>
        <input name="categories" type="text" id="categories" value={this.state.categories} onChange={this.handleItemChange}/>

        <label htmlFor="image">Image URL</label>
        <input name="image" type="text" id="image" value={this.state.image} onChange={this.handleItemChange}/>

        <label htmlFor="website">Website URL</label>
        <input name="website" type="text" id="website" value={this.state.website} onChange={this.handleItemChange}/>

        <input type="submit" value="Submit" />

      </form>
    )
  }
}

export default RestaurantForm;
