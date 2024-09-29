import React from "react";
import './GoodsGrid.css';
import Card from "../Card/Card.jsx";

export default class GoodsGrid extends React.Component{
    
    render(){
        const cards = this.props.goods.map( v =>
            <Card key={v.id} model={v} />
        );

        return (
            <div className="Goods-grid">
               {cards} 
            </div>
        );
    }
}