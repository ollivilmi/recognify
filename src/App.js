import React, { Component } from 'react';
import './app.css';
import ImageGrid from './Grid';
import NavBar from './Nav';
import Category from './Category';

const hardCodedCategories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];
const ORIGIN = window.location.origin;

class Options extends Component {
  getImages = () => {
    const images = require.context("../public/images", false, /\.(png|jpe?g|svg)$/);
    return images.keys().map((item, index) => {
      return {
        src: item.replace("./", ORIGIN + "/images/"),
        alt: index,
        category: null
      };
    });
  }

  render() {
    if (this.props.categories != null) {
      return <Category images={this.getImages()} categories={this.props.categories}/>
    } else {
      return (
        <ImageGrid images={this.getImages()}/>
      );
    }
  } 
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.setState({
      categories: hardCodedCategories
    })
  }

  render() {
    return (
      <div>
        <NavBar title="Recognify" handleClick={this.handleClick}/>
        <Options categories={this.state.categories}/>
      </div>
    )
  }
}

export default App;
