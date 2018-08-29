import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
      super(props);
      this.state = {
        src: props.src,
        alt: props.alt,
      }
    }
  
    render() {
      return (
          <a href={this.state.src}className="imageLink">
              <img src={this.state.src} alt={this.state.alt}/>
          </a>
      )
    }
  }

  export default Image;