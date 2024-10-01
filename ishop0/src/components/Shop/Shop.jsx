import React from 'react';
import './Shop.css';
import ShopSign from '../ShopSign/ShopSign';
import GoodsGrid from '../GoodsGrid/GoodsGrid';
import goodsArr from '../../goods.json';

class Shop extends React.Component {
    render() {
      return (
        <div className="Shop">
          <ShopSign shopname="iShop - 1" address="221b Baker St, Marylebone, London"/>
          <GoodsGrid goods={goodsArr}/>
        </div>
      );
    }
  }
  
  export default Shop;