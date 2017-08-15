import React, { Component } from 'react';
import RandomSprout from '../components/RandomSprout';
import SproutsIndex from '../components/SproutsIndex';
import LongestSprout from '../components/LongestSprout';

class SproutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      recipes: [],
      longestRecipe: ""
    }
  }

  getRandomRecipe(){
    // YOUR FETCH CALL HERE
    fetch('/api/v1/random-recipe')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} ${response.statusText}`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {
      this.setState({
        recipe: body,
        recipes: [],
        longestRecipe: ""
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getAllRecipes(){
    // YOUR FETCH CALL HERE
    fetch('/api/v1/recipes')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} ${response.statusText}`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {
      this.setState({
        recipes: body,
        recipe: "",
        longestRecipe: ""
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getLongestRecipe(){
    fetch('/api/v1/recipes-longest')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} ${response.statusText}`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {
      this.setState({
        longestRecipe: body,
        recipes: [],
        recipe: ""
      })

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render(){

    let handleRandomClick = () => {
      this.getRandomRecipe();
    }

    let handleIndexClick = () => {
      this.getAllRecipes();
    }

    let handleLongestClick = () => {
      this.getLongestRecipe();
    }

    return(
      <div className="container">
        <h1>Sprout Fetcher</h1>
        <RandomSprout
          recipe={this.state.recipe}
          handleClick = {handleRandomClick}
        />
        <SproutsIndex
          recipes={this.state.recipes}
          handleClick={handleIndexClick}
        />
        <LongestSprout
          recipe={this.state.longestRecipe}
          handleClick = {handleLongestClick}
        />

        <div className="buttons">
          <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>
          <button onClick={handleLongestClick} className="btn">Get Longest Recipe</button>
          <button onClick={handleIndexClick} className="btn">See All Recipes</button>
        </div>
      </div>
    )
  }
}

export default SproutsContainer;
