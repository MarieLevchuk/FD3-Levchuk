import React from 'react';
import './TextColumn.css';

export default class TextColumn extends React.Component{
    render(){
        let arr = this.props.text.split(/<br\s?\/?>/);
        return (
            <div className="Text-column">
                {
                    arr.map( (item, index )=>{
                        if(index < arr.length-1){
                            return (
                                <>
                                    {item}
                                    <br />
                                </>
                            )
                        } else {
                            return (
                                item
                            )
                        }
                    })
                }      
            </div>
        );
    }
}