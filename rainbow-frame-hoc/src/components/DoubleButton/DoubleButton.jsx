import React from "react";
import "./DoubleButton.sss";

export default class DoubleButton extends React.Component{
    render(){
        return (
            <div className="DoubleButton">
                <input className="DoubleButton__btn" type="button" value={this.props.caption1}/>
                <span>{this.props.children}</span>
                <input className="DoubleButton__btn" type="button" value={this.props.caption1}/>
            </div>
        );
    }
}