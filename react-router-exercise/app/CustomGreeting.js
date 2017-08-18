import React, { Component } from 'react';
import Form from './Form'

class CustomGreeting extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      type: "greeting"
    }
    this.handleName = this.handleName.bind(this)
    this.handleType = this.handleType.bind(this)
  }

  handleName(event){
    let newName = event.target.value
    this.setState({ name: newName })
  }

  handleType(event){
    let newType = event.target.value
    this.setState({ type: newType })
  }

  render(){
    let message;

    if (this.state.type === "greeting"){
      message = "Hello my friend "
    } else {
      message = "Goodbye my friend "
    }

    return(
      <div>
        <h1>Custom Greeting Generator</h1>
        <Form handleType={this.handleType} handleName={this.handleName}/>
        <p>{message}{this.state.name}</p>
      </div>
    )
  }
}

export default CustomGreeting;
