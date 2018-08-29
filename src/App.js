import React, { Component } from 'react';
import './app.css';

const ORIGIN = window.location.origin;
const hardCodedCategories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];

class TitleButton extends Component {
  render() {
    return (
      <button className="titleButton" onClick={this.props.onClick}>
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
        <button onClick={this.props.onClick} className="searchButton">Search</button>
      </div>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <TitleButton onClick={this.props.handleClick} title="Recognify"/>
        <SearchBar onClick={this.props.handleClick}/>
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
  getTitle = () => {
    if (this.props.title != null) {
      return <h4>{this.props.title}</h4>;
    }
  }

  render() {
    return (
      <a href={this.props.src} className="category">
        {this.getTitle()}
        <Image src={this.props.src} alt={this.props.alt}/>
      </a>
    )
  }
}

class ImageGrid extends Component {
  getTitle = () => {
    if (this.props.categories != null) {
      const title = this.props.categories[Math.floor(Math.random() * 5)];
      return title;
    }
    return null;
  }

  grid = dir => {
    const images = require.context("../public/images", false, /\.(png|jpe?g|svg)$/);
    return images.keys().map((item, index) => {
      return (
        <div className="grid-item" key={index}>
         <Category 
         src={item.replace("./", ORIGIN + "/images/")} 
         alt={index}
         title={this.getTitle()}/>
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
        <NavBar handleClick={this.handleClick}/>
        <ImageGrid categories={this.state.categories}/>
      </div>
    )
  }
}

export default App;
