import React from "react";
import "./DoubleButton.css";

export default class DoubleButton extends React.Component{
    handleClick = (e) => {
        this.props.cbPressed(e.target.value);
    }

    render(){
        return (
            <div className="DoubleButton">
                <input className="DoubleButton__btn" type="button" value={this.props.caption1} onClick={this.handleClick}/>
                <span>{this.props.children}</span>
                <input className="DoubleButton__btn" type="button" value={this.props.caption2} onClick={this.handleClick}/>
            </div>
        );
    }
}