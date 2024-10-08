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

    deleteItem = (id) => {
        let goodsCopy = JSON.parse(JSON.stringify(this.state.goods));
        this.setState({goods: goodsCopy.filter(good => good.id != id)});
    }
    
    render(){

        return (
            <div className="Goods-grid">
               {
                    this.state.goods.map( v => <Card key={v.id} model={v} cbSelectItem={this.selectItem} cbDeleteItem={this.deleteItem} isSelected={this.state.isSelected}/>)
               } 
            </div>
        );
    }
}