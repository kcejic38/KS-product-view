import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Checkout = (props) => {
  return (
    <div className="checkout-container">
      <div className="size-helper">
        <i className="glyphicon glyphicon-th"></i>
        <span><u>Size Chart</u></span>
      </div>
      <div className="row">
        <Dropdown className="dropdown-table">
          <Dropdown.Toggle id="dropdown-table">
          Select Size
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>2</Dropdown.Item>
            <Dropdown.Item>3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdown-size">
          <Dropdown.Toggle>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>2</Dropdown.Item>
            <Dropdown.Item>3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row">
        <div className="bag-button"><span>ADD TO BAG</span> <i class="glyphicon glyphicon-arrow-right"></i></div>
        <div className="heart"><i class="glyphicon glyphicon-heart"></i></div>
      </div>
      <div className="row shipping">
        <div className="container">
          <i class="glyphicon glyphicon-plane"></i>
          <span><u>FREE SHIPPING AND FREE RETURNS</u></span>
        </div>
      </div>
    </div>
  )
}

export default Checkout;