import React, { Component } from 'react';
import './app.css';
import ImageGrid from './Grid';
import NavBar from './Nav';
import Category from './Category';

const ORIGIN = window.location.origin;

class Options extends Component {
  render() {
    if (this.props.categoryView) {
      return <Category images={this.props.images}/>
    } else {
      return (
        <ImageGrid images={this.props.images}/>
      );
    }
  } 
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.getImages(),
      categoryView: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

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

  handleClick = e => {
    fetch("../json/data.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        images: data,
        categoryView: true
      })
    });
  }

  render() {
    return (
      <div>
        <NavBar title="Recognify" handleClick={this.handleClick}/>
        <Options categoryView={this.state.categoryView} images={this.state.images}/>
      </div>
    )
  }
}

export default App;
