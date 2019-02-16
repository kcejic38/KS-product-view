import React from 'react';
import Image from 'react-bootstrap/Image';


class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let colors = this.props.currentProduct ? this.props.currentProduct.colors.split(',') : [];
    return (
      <div className="related-container">
        <h5>Available Colors</h5>
        <ol>
          {colors.map((color, i) => {
            return (
              <li>{color} {i < colors.length -1? '/': ''}</li>
            )
          })}
        </ol>
        <div className="other-colors">
          <Image className="other-thumbnail" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/9bd9d0ae47aa4e6c85b8a97e012f405b_9366/Ultraboost_All_Terrain_Shoes_Grey_F35236_01_standard.jpg" roundedCircle />
          <Image className="other-thumbnail" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/9bd9d0ae47aa4e6c85b8a97e012f405b_9366/Ultraboost_All_Terrain_Shoes_Grey_F35236_01_standard.jpg" roundedCircle />
          <Image className="other-thumbnail" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/9bd9d0ae47aa4e6c85b8a97e012f405b_9366/Ultraboost_All_Terrain_Shoes_Grey_F35236_01_standard.jpg" roundedCircle />
        </div>
      </div>
    )

  }
}

export default RelatedProducts;