import React from "react";
import './RainbowFrame.css';

export default class RainbowFrame extends React.Component {
    render(){
        if (!this.props.colors || this.props.colors.length === 0 ) {
          return this.props.children;
        }

        if (this.props.colors.length === 1) {
            return (
                <div className="Rainbow-frame" style={{borderColor:this.props.colors}}>
                    <RainbowFrame>{this.props.children}</RainbowFrame>
                </div>
            );
        } else {
            let newColors = this.props.colors.slice();   
        
            return (
                <div className="Rainbow-frame" style={{borderColor:newColors.pop()}}>
                    <RainbowFrame colors={newColors}>{this.props.children}</RainbowFrame>
                </div>
            );
        }
    }
};



// export default function RainbowFrame ({ colors, children }) {
//     if (!colors || colors.length === 0 || colors === undefined) {
//       return children;
//     }

//     if (colors.length === 1) {
//         return (
//             <div className={"Rainbow-frame" } style={{borderColor:colors}}>
//                 <RainbowFrame>{children}</RainbowFrame>
//             </div>
//         );
//     } else {
//         let newColors = colors.slice();
//         let color = newColors.pop();       
    
//         return (
//             <div className={"Rainbow-frame " + color } style={{borderColor:color}}>
//                 <RainbowFrame colors={newColors}>{children}</RainbowFrame>
//             </div>
//         );
//     }
// };
