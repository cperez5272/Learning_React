import React from 'react';
import './Tooltip.css';

class Tooltip extends React.Component {
    render() {
        return (
            <span className='Tooltip'>
                <span className='Tooltip-content'>
                    {this.props.children}
                </span>
                <div className= 'Tooltip-message'>
                    {this.props.message}
                </div>
            </span>
        )
    }
}


export default Tooltip