import React from 'react';
export default class Helper extends React.Component {
    render(){
        return (
            <>
                {this.props.children}
                <br/>
            </>
        );
    }
}