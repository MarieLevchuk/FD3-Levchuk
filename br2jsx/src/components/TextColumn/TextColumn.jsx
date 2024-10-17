import React from 'react';
import './TextColumn.css';

export default class TextColumn extends React.Component{
    
    render(){
        let arr = this.props.text.split(/<br\s?\/?>/);
        let col = [];
        arr.forEach((item, index) => {
            col.push(item);
            if(index < arr.length-1)
                col.push(<br key={index} />);
        })
        
        return(
            <div className="Text-column">
                { col }
            </div>
        );
    }
}