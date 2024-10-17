import React from "react";
import './Info.css';

export default class Info extends React.Component{
    render(){
        return(
            (this.props.model)&&
            <div className="Info">
                <div className="Info__name">
                    {this.props.model?.name}
                </div>
                <div className="Info__descripton">
                    {this.props.model?.name}
                </div>
                <div className="Info__price">
                    Цена: ${this.props.model?.price}
                </div>
            </div>
        );
    }
}