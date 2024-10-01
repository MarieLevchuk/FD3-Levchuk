import React from 'react';
import './ShopSign.css';

export default class ShopSign extends React.Component {
    render() {
      return (
        <div className="Shop-sign__info">
            <div className="Shop-sign__name">{this.props.shopname}</div>
            <div className="Shop-sign__address">{this.props.address}</div>
        </div>
      );
    }
}