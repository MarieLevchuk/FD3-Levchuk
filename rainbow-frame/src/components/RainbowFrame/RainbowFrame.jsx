import React from "react";
import './RainbowFrame.css';

export default class RainbowFrame extends React.Component {
    buildFrame(colors, children){
        if (!colors || colors.length === 0 ) {
            return children;
        }
          
        let newColors = colors.slice();   
      
        return (
            <div className="Rainbow-frame" style={{borderColor:newColors.pop()}}>
              {this.buildFrame(newColors, children)}
            </div>
        );
    }

    render(){
        return this.buildFrame(this.props.colors, this.props.children);
    }
};