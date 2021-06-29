import React, { Component } from "react";
import "./Display.css"

export class Display extends Component {
    render() {
        return (
        <div>
            <img
            src={this.props.bigImage}
            alt="no img"
            style={{ height: 500, width: 500 }}
            />
            <button onClick={this.props.randomImageGenerator}>Random Image</button>
        </div>
        );
    }
}

export default Display;