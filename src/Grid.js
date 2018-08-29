import React, { Component } from 'react';
import Image from './Image';

  class ImageGrid extends Component {

    grid = images => {
    return images.map((image, index) => {
        return (
            <div className="grid-image" key={index}>
              <Image src={image.src} alt={image.alt}/>
            </div>
          );
        });
    }
  
    render() {
      return (
        <div className="grid-container">
          {this.grid(this.props.images)}
        </div>
      )
    }
  }

  export default ImageGrid;