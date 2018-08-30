  import React, { Component } from 'react';
  import Image from './Image';

  class Category extends Component {
    sortByCategory = images => {
      let categories = new Map();
      images.map((image, index) => {
        if (categories.get(image.category) == null) {
          categories.set(image.category, new Array(image));
        }
        else {
          categories.get(image.category).push(image);
        }
      });

      let categoryElements = [];
      let i = 0;

      for (var [title, contents] of categories) {
        categoryElements.push(
        <div className="grid-category" key={i++}>
          <h4>{title}</h4> 
          <Image src={contents[0].src} alt={contents[0].alt}/>
        </div>)
      }
      return categoryElements;
    }

    render() {
      return (
        <div className="grid-container">
          {this.sortByCategory(this.props.images)}
        </div>
      );
    }
  }

  export default Category;