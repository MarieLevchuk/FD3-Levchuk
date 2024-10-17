import React from 'react';
import './TextColumn.css';

export default class TextColumn extends React.Component{

    print = (a, index) => {
        if (index > a.length)
            return;

        if (index === a.length-1)
            return a[index];

        if(index < a.length)
            return <>{a[index]}<br/>{this.print(a, ++index)}</>
    }
    
    render(){
        let arr = this.props.text.split(/<br\s?\/?>/);
        
        return(
            <div className="Text-column">
                {this.print(arr, 0)}
            </div>
        );
    }
}