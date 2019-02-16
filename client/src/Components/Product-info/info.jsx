import React from 'react';
import ProductInfo from './model-info.jsx';
import RelatedProducts from './related-products.jsx';
import Checkout from './checkout.jsx';


class InfoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  render() {
    return (
      <div className="info-container">
        <ProductInfo currentProduct={this.props.products[this.state.current]}/>
        <RelatedProducts products={this.props.products} currentProduct={this.props.products[this.state.current]}/>
        <Checkout currentProduct={this.props.products[this.state.current]}/>
      </div>
    )
  }
}

export default InfoSection;