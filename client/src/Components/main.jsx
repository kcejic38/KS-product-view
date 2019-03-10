import React from 'react';
import $ from 'jquery';
import Images from './product-view/images.jsx';
import InfoSection from './Product-info/info.jsx';
import ImageCarousel from './product-view/image-carousel.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      images: [],
      otherImages: [],
      view: false
    }
    this.getImages = this.getImages.bind(this);
    this.onRelatedClick = this.onRelatedClick.bind(this);
    this.onExitClick = this.onExitClick.bind(this);
    this.onCarouselClick = this.onCarouselClick.bind(this);
  }

  componentDidMount() {
    this.getProduct('UltraBoost All Terrain Shoes');
  }

  getProduct(model) {
    $.ajax({
      type: 'GET',
      url: '/shoe/1',
      contentType: 'application/json',
      error: (err) => { console.log(err, 'failed retrieving products') },
      success: (data) => {
        this.setState({
          products: data
        });
        this.getImages(data[0].image_id, (data) => { this.setState({ images: data }) });
        this.updateOtherImages(data);
        var splitImages = data[0].image_urls.split('***');
        this.setState({
          images: splitImages
        })
      }
    })
  }

  updateOtherImages(data) {
    for (let i = 0; i < data.length; i++) {
      // let temp = this.state.otherImages;
      this.getImages(data[i].image_id, (images) => {
        let current = this.state.otherImages;
        current.push(images[0]);
        this.setState({ otherImages: current })
      });
    }
  }

  getImages(id, callback) {
    $.ajax({
      type: 'GET',
      url: '/images',
      data: { imageID: id },
      contentType: 'application/json',
      success: (data) => { callback(data) },
      error: (err) => { console.log('error') }
    })
  }

  onRelatedClick(i) {
    this.getImages(this.state.products[i].image_id, (data) => { this.setState({ images: data }) })
  }

  onExitClick() {
    this.setState({ view: false });
  }

  onCarouselClick() {
    this.setState({ view: true });
  }

  renderImageCarousel() {
    if (this.state.view) {
      return <ImageCarousel images={this.state.images} onExitClick={this.onExitClick} />
    }
  }

  render() {
    return (
      <div className="main-component">
        <div>
          {this.renderImageCarousel()}
        </div>
        <div className="center">
          <Images images={this.state.images} showCarousel={this.onCarouselClick} />
          <InfoSection products={this.state.products} otherImages={this.state.otherImages} onRelatedClick={this.onRelatedClick} />
        </div>
      </div>
    )
  }
}

export default Main;