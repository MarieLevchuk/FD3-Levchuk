import React from "react";
import './GoodsGrid.css';
import Card from "../Card/Card.jsx";

import shopEvents from "../../events/shopEvents";

export default class GoodsGrid extends React.Component{
    state ={
        goods: this.props.goods,
        isSelected: 0
    };

    
    componentDidMount = () => {
        shopEvents.addListener('selectItem',this.selectItem);
        shopEvents.addListener('deleteItem',this.deleteItem);
    };

    componentWillUnmount = () => {
        shopEvents.removeListener('selectItem',this.selectItem);
        shopEvents.removeListener('deleteItem',this.deleteItem);
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
                    this.state.goods.map( v => <Card key={v.id} model={v} isSelected={this.state.isSelected}/>)
               } 
            </div>
        );
    }
}