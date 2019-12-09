import React from 'react';
import './Split.js';

class Split extends React.Component {
    render() {
        const rightAndLeft = `split ${this.props.className}`
        // This is to make the altered css you did in app.js to work. You can flex, color, whatever you want. 
        const increaseFlex = { 
            flex: this.props.flexBasis,
            fontSize: this.props.bigSize
        }
        return (
            // You have to use style if you want to change the css a bit.
            <div className={rightAndLeft} style= {increaseFlex}>
                {/* the children are the 'im the left' and 'im the right' in app.js */}
                {this.props.children}
                
            </div>
        )
    }
}

export default Split