import React from "react";
import './GoodsGrid.css';
import Card from "../Card/Card.jsx";
import Info from "../Info/Info.jsx";
import Form from "../Form/Form.jsx";

export default class GoodsGrid extends React.Component{
    state ={
        goods: this.props.goods,
        isSelected: 0,
        mode: null,
        modelToUpdate: null,
        isModifying: false
    };

    selectItem = (id) => {
        this.setState({isSelected: id});
    }

    handleChanges = (status) => {
        this.setState({isModifying:status});
    }

    createItem = (model) => {
        const goodsCopy = this.state.goods.slice();
        model.id = goodsCopy[goodsCopy.length - 1].id + 1;

        goodsCopy.push(model);
        this.setState({goods:goodsCopy}, this.closeForm);
    }

    updateItem = (model) => {
        const goodsCopy = this.state.goods.slice();
        goodsCopy.forEach((item, index) => {
            if(item.id === model.id){
                goodsCopy[index] = model;
            }
        });

        this.setState({goods:goodsCopy}, this.closeForm);
    }

    deleteItem = (id) => {
        let goodsCopy = JSON.parse(JSON.stringify(this.state.goods));
        this.setState({goods: goodsCopy.filter(good => good.id != id)});
    }

    showEditForm = (id) => {
        const model = this.state.goods.find((model) => model.id == id);
        this.setState({mode: 'edit', modelToUpdate: model, isSelected: id});
    }

    showCreateForm = () => {
        this.setState({mode: 'create', modelToUpdate: null, isSelected: 0});
    }

    closeForm = () => {
        this.setState({mode: null});
    }
    
    render(){

        return (
            <div className="content">
                <div >
                    <button className="Goods-grid__add-btn" onClick={this.showCreateForm}>Добавить продукт</button>
                    {
                        (this.state.isSelected > 0)&&(!this.state.mode)&&
                        <Info model={this.state.goods.find(({id}) => id == this.state.isSelected)}></Info>
                    }
                    {
                        (this.state.mode)&&
                        <Form key={this.state.modelToUpdate?.id} mode={this.state.mode} {...this.state.modelToUpdate} cbHandleChanges={this.handleChanges} cbCreateItem={this.createItem} cbUpdateItem={this.updateItem} cbCloseForm={this.closeForm}></Form>
                    }
                </div>
                
                <div className="Goods-grid">
                   {
                        this.state.goods.map( v => <Card key={v.id} model={v} cbSelectItem={this.selectItem} cbEditItem={this.showEditForm} cbDeleteItem={this.deleteItem} isSelected={this.state.isSelected}/>)
                   } 
                </div>
            </div>
        );
    }
}