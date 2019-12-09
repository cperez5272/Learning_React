import React from 'react';
import './Split.js';

class Split extends React.Component {
    render() {
        const leftAndRight = `split ${this.props.className}`
        // This is to make the altered css you did in app.js to work. You can flex, color, size, whatever you want. 
        const increaseFlex = { 
            flex: this.props.flexBasis}
        const increaseSize = {
            fontsize: this.props.bigSize
        }
        return (
            // You have to use style if you want to change the css a bit.
            <div className={leftAndRight} style= {increaseFlex, increaseSize}>
                {/* the children are the 'im the left' and 'im the right' in app.js */}
                {this.props.children}

            </div>
        )
    }
}

export default Split