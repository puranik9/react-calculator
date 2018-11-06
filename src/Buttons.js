/**
 * Created by puranikk on 2018-11-05.
 */
import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return <div className="Buttons"> {this.props.children} </div>
    }
}

export default Buttons;