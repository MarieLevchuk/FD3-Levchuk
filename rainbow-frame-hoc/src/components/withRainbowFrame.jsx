import React from "react";

export default function withRainbowFrame(colors){
    return Comp => {
        class NewComp extends React.Component {
            render(){                
                let frame = <Comp {...this.props}/>;
                colors.forEach(color => {
                    frame = <div className="frame" style={{borderColor:color}}>{frame}</div>
                });
    
                return frame;
            }
        }
    
        return NewComp;
    }
}