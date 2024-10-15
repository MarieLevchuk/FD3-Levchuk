import React from 'react';
import './TextColumn.css';
import Helper from '../Helper/Helper.jsx';

export default class TextColumn extends React.Component{
    render(){
        let arr = this.props.text.split(/<br\s?\/?>/);
        return (
            <div className="Text-column">
                {
                    arr.map( (item, index )=><Helper key={index}>{item}</Helper>)
                }                
            </div>
        );
    }
}