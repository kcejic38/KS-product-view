import React from 'react';
import $ from 'jquery';
import ImageGallery from './image-gallery.jsx';
import CurrentImage from './current-image.jsx';

class Images extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentImage: 0,
      images: []
    }
  }
  render() {
    return (
      <div className="image-container">
        <ImageGallery />
        <CurrentImage />
      </div>
    )
  }
}

export default Images;