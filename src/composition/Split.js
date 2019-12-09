import React from 'react';
import './Split.js';

class Split extends React.Component {
    render() {
        const leftAndRight = `split ${this.props.className}`
        const increaseSize = { flex: this.props.flexBasis}
        return (
            <div className={leftAndRight} size= {increaseSize}>
                {/* the children are the 'im the left' and 'im the right' in app.js */}
                {this.props.children}

            </div>
        )
    }
}

export default Split