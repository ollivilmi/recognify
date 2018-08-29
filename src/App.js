import React, { Component } from 'react';
import './app.css';

const ORIGIN = window.location.origin;

class TitleButton extends Component {
  render() {
    return (
      <button className="titleButton" onClick = {()=> this.props.onClick}>
        {this.props.title}
      </button>
    )
  }
}

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <input type="text" className="searchInput"/>
        <button className="searchButton">Search</button>
      </div>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <TitleButton title="Recognify"/>
        <SearchBar/>
      </div>
    )
  }
}

class Image extends Component {
  render() {
    return (
      <div className="gridImage">
          <img src={this.props.src} alt={this.props.alt}></img>
      </div>
    )
  }
}

class Category extends Component {
  render() {
    return (
      <a href={this.props.src} className="category">
        <h4>Title</h4>
        <Image src={this.props.src} alt={this.props.alt}/>
      </a>
    )
  }
}

class ImageGrid extends Component {
  grid = dir => {
    const images = require.context("../public/images", false, /\.(png|jpe?g|svg)$/);
    return images.keys().map((item, index) => {
      return (
        <div className="grid-item" key={index}>
         <Category src={item.replace("./", ORIGIN + "/images/")} alt={index}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="grid-container">
        {this.grid(this.props.ctx)}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <ImageGrid/>
      </div>
    )
  }
}

export default App;
