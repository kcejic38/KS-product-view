import React from 'react';
import ProductInfo from './model-info.jsx';
import RelatedProducts from './related-products.jsx';

class InfoSection extends React.Component {
  render() {
    return (
      <div className="info-container">
        <ProductInfo />
        <RelatedProducts />
      </div>
    )
  }
}

export default InfoSection;