import React, {Component} from 'react';

class ReviewForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      rating: "",
      content: ""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.submitReview = this.submitReview.bind(this)
    this.clearState = this.clearState.bind(this)
  }

  onChangeHandler(event){
    let stateValue = event.target.name
    let value = event.target.value
    this.setState({[stateValue]: value})
  }

  clearState() {
    this.setState({
      name: "",
      rating: "",
      content: ""
    })
  }

  submitReview(event){
    event.preventDefault();
    let reviewToSubmit = {
      restaurant_id: this.props.id,
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    }

    this.props.submitFunction(reviewToSubmit)
    this.clearState()
  }

  render() {
    return(
      <form className="review-form" onSubmit={this.submitReview} >

        <input type="hidden" value={this.props.id}/>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={this.state.name} onChange={this.onChangeHandler} />

        <label htmlFor="rating">Rating</label>
        <select name="rating" form="review-form" value={this.state.rating} onChange={this.onChangeHandler} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="content">Review</label>
        <textarea id="content" name="content" value={this.state.content} onChange={this.onChangeHandler} />

        <input type="submit" value="Submit" />

      </form>
    )
  }
}

export default ReviewForm;
