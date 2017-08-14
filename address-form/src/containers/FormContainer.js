import React, { Component } from 'react'
import TextBox from '../components/TextBox'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: ""
    }

    this.inputChange=this.inputChange.bind(this);
  }

  inputChange(event){
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
  }

  render() {

    return (
      <form className="callout" id="shipping-address-form">
        <h1>Shipping Address</h1>

        <TextBox
          label="First Name"
          name="firstName"
          changeMethod={this.inputChange}
        />

        <TextBox
          label="Last Name"
          name="lastName"
          changeMethod={this.inputChange}
        />

        <TextBox
          label="Address"
          name="address"
          changeMethod={this.inputChange}
        />

        <TextBox
          label="City"
          name="city"
          changeMethod={this.inputChange}
        />

        <TextBox
          label="State"
          name="state"
          changeMethod={this.inputChange}
        />

        <TextBox
          label="Zip Code"
          name="zipcode"
          changeMethod={this.inputChange}
        />

        <TextBox
          label="Phane Number"
          name="phoneNumber"
          changeMethod={this.inputChange}
        />

        <TextBox
          label="Email"
          name="email"
          changeMethod={this.inputChange}
        />

        <input type="submit" className="button" value="Submit" />
      </form>
    )
  }
}

export default FormContainer
