  import React, { Component } from 'react';
  import Image from './Image';
  
  const Title = props => {
    if (props.categories != null) {
        return <h4>{props.categories[Math.floor(Math.random() * 5)]}</h4>;
    }
    return null;
  }

  class Category extends Component {

    grid = images => {
        return images.map((image, index) => {
            return (
                <div className="grid-category" key={index}>
                    <Title categories={this.props.categories}/>
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
      );
    }
  }

  export default Category;