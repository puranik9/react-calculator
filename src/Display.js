/**
 * Created by puranikk on 2018-11-05.
 */
import React, { Component } from 'react';

class Display extends Component {
    render() {
        const string = this.props.data.join('');
        return <div className="Display"> {string} </div>
    }
}

export default Display;