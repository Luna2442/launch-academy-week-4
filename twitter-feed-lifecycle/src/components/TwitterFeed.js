import React, { Component } from 'react';
import Tweet from './Tweet'

class TwitterFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: null
    }

    this.fetchData = this.fetchData.bind(this)
  }

  fetchData(){
    fetch('http://localhost:4567/api/v1/tweets')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} ${response.statusText}`
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(responseBody => {
      this.setState({tweets: responseBody})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    debugger;
    this.fetchData();
    console.log("component mounted");
  }

  render() {

    debugger;

    if (this.state.tweets != null) {
      let tweets = this.state.tweets.map(tweet => {
        return <Tweet key={tweet.id_str} tweet={tweet} />
      })
      return (
        <div className="row columns small-12 medium-9 large-6">
          <div className="twitter-feed">
            {tweets}
          </div>
        </div>
      );
    } else {
      return (
        <div className="row columns small-12 medium-9 large-6">
          <div className="twitter-feed">
              Loading...
          </div>
        </div>
      );
    }
  }
}

export default TwitterFeed;
