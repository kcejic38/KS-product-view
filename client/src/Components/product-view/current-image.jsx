import React from 'react';

const CurrentImage = (props) => {
  return (
    <div className="current-container">
      <div className="left-arrow">
        <span className="glyphicon glyphicon-chevron-left"></span>
      </div>
      <div className="right-arrow">
        <span className="glyphicon glyphicon-chevron-right"></span>
      </div>
      <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/9bd9d0ae47aa4e6c85b8a97e012f405b_9366/Ultraboost_All_Terrain_Shoes_Grey_F35236_01_standard.jpg" alt="ultraboost"></img>
    </div>
  )
}

export default CurrentImage;