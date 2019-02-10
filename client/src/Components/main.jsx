import React from 'react';
import $ from 'jquery';
import Images from './product-view/images.jsx';
import InfoSection from './Product-info/info.jsx';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentProduct:'',
      products: ''
    }
  }

  componentDidMount() {
    // this.getProduct('UltraBoost All Terrain Shoes');
  }

  getProduct(model) {
    $.ajax({
      type: 'GET',
      url: '/products',
      data: { model: model},
      contentType: 'application/json',
      error: (err) => {console.log(err, 'failed retrieving products')},
      success: (data)=> {this.setState({
        products: data,
        currentProduct: data[0],
      })}
    })
  }

  render() {
    return (
      <div className="main-component">
        <div className="center">
          <Images />
          <InfoSection />
        </div>
      </div>
    )
  }
}

export default Main;