import React from 'react';
import './Shop.css';

class Shop extends React.Component {
    render() {
      return (
        <div className="Shop__info">
            <div className="Shop__name">{this.props.shopname}</div>
            <div className="Shop__address">{this.props.address}</div>
        </div>
      );
    }
  }
  
  export default Shop;