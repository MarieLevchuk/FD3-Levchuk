import React from 'react';
import './Shop.css';
import ShopSign from '../ShopSign/ShopSign';
import GoodsGrid from '../GoodsGrid/GoodsGrid';

class Shop extends React.Component {
    render() {
      return (
        <div className="Shop">
          <ShopSign shopName={this.props.shopName} address={this.props.address}/>
          <GoodsGrid goods={this.props.goods}/>
        </div>
      );
    }
  }
  
  export default Shop;