import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="main">
        <Link to='/'>Custom Greeting</Link>
        <Link to='/greeting'>Greeting</Link>
        <Link to='/goodbye'>Goodbye</Link>
        {this.props.children}
      </div>
    )
  }
}

export default NavBar;
