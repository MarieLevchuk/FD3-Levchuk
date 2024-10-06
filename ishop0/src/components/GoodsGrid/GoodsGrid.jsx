import React from "react";
import './GoodsGrid.css';
import Card from "../Card/Card.jsx";

export default class GoodsGrid extends React.Component{
    state ={
        goods: this.props.goods,
        isSelected: 0
    };

    selectItem = (id) => {
        this.setState({isSelected: id});
    }
    
    render(){

        return (
            <div className="Goods-grid">
               {
                    this.state.goods.map( v => <Card key={v.id} model={v} cbSelectItem={this.selectItem} isSelected={this.state.isSelected}/>)
               } 
            </div>
        );
    }
}