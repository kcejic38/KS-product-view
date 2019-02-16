import React from 'react';
import $ from 'jquery';
import Images from './product-view/images.jsx';
import InfoSection from './Product-info/info.jsx';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      images: []
    }
    this.getImages = this.getImages.bind(this);
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
      this.getImages(data[0].image_ID);
    }
    })
  }

  getImages(id) {
    $.ajax({
      type: 'GET',
      url: '/images',
      data: { imageID: id},
      contentType: 'application/json',
      success: (data)=> {this.setState({images:data})},
      error: (err) => {console.log('error')}
    })
  }

  render() {
    return (
      <div className="main-component">
        <div className="center">
          <Images images={this.state.images}/>
          <InfoSection products={this.state.products}/>
        </div>
      </div>
    )
  }
}

export default Main;