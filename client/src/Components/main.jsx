import React from 'react';
import $ from 'jquery';
import Images from './product-view/images.jsx';
import InfoSection from './Product-info/info.jsx';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      images: [],
      otherImages: []
    }
    this.getImages = this.getImages.bind(this);
    this.onRelatedClick = this.onRelatedClick.bind(this);
  }

  componentDidMount() {
    this.getProduct('UltraBoost All Terrain Shoes');
  }

  getProduct(model) {
    $.ajax({
      type: 'GET',
      url: '/products',
      data: { model: model},
      contentType: 'application/json',
      error: (err) => {console.log(err, 'failed retrieving products')},
      success: (data)=> {this.setState({
        products: data
      });
      this.getImages(data[0].image_ID, (data) => { this.setState({images: data})});
      this.updateOtherImages(data);
    }
    })
  }

  updateOtherImages(data){
    for (let i = 0; i < data.length; i++) {
      // let temp = this.state.otherImages;
      this.getImages(data[i].image_ID, (images) => {
        let current = this.state.otherImages;
        current.push(images[0]);
        this.setState({otherImages: current })
      });
    }
  }

  getImages(id, callback) {
    $.ajax({
      type: 'GET',
      url: '/images',
      data: { imageID: id},
      contentType: 'application/json',
      success: (data)=> {callback(data)},
      error: (err) => {console.log('error')}
    })
  }

  onRelatedClick(i) {
    this.getImages(this.state.products[i].image_ID, (data) => {this.setState({images: data})})
  }

  render() {
    return (
      <div className="main-component">
        <div className="center">
          <Images images={this.state.images}/>
          <InfoSection products={this.state.products} otherImages={this.state.otherImages} onRelatedClick={this.onRelatedClick}/>
        </div>
      </div>
    )
  }
}

export default Main;