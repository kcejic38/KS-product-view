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

  getImages(id) {
    $.ajax({
      type: 'GET',
      url: '/images',
      data: { imageID: id},
      contentType: 'application/json',
      success: (data)=> {console.log(data)},
      error: (err) => {console.log('error')}
    })
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