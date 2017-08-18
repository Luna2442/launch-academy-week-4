import React, {Component} from 'react';

class ReviewForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      rating: '',
      content: '',
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
      name: '',
      rating: '',
      content: ''
    })
  }

  handleFormSubmit(event){
    event.preventDefault();

    let formattedRating;
    switch(this.state.rating){
      case "1":
        formattedRating = 20;
        break;
      case "2":
        formattedRating = 40;
        break;
      case "3":
        formattedRating = 60;
        break;
      case "4":
        formattedRating = 80;
        break;
      case "5":
        formattedRating = 100;
        break;
      default:
        formattedRating = 20;
    }

    let formPayLoad = {
      restaurant_id: this.props.id,
      name: this.state.name,
      rating: formattedRating,
      content: this.state.content
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
      <form className="review-form" id="review-form" onSubmit={this.handleFormSubmit}>
        {errorDiv}

        <label htmlFor="name">Name</label>
        <input name="name" type="text" id="name" value={this.state.name} onChange={this.handleItemChange}/>

        <label htmlFor="rating">Rating</label>
        <select name="rating" id="rating" form="review-form" value={this.state.rating} onChange={this.handleItemChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" value={this.state.content} onChange={this.handleItemChange}/>

        <input type="submit" value="Submit" />

      </form>
    )
  }
}

export default ReviewForm;
