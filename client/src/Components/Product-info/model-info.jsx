import React from 'react';
import StarRatings from 'react-star-ratings';


const ProductInfo = (props) => {
  return (
    <div className="product-info-container">
      <div className="star-review-container">
        <StarRatings
          rating={3}
          starRatedColor='black'
          numberOfStars={5}
          name='rating'
          starDimension='16px'
          starSpacing='2px'
          />
        <span className="review-link"><u>Read all TODO reviews</u></span>
      </div>
      <div>
        <span className="category"> TODO: Men's Running</span>
        <h1 className="model">TODO: UltraBoost All Terrain Shoes</h1>
        <span className="price">TODO: $189</span>
      </div>
    </div>
  )
}

export default ProductInfo;