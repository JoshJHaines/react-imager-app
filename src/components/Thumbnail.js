import React, { Component } from "react";
import "./Thumbnail.css"

export class Thumbnail extends Component {
    render() {
        return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div>
            {this.props.images.map((item, index) => {
                return (
                <img
                    style={{ height: 150, width: 150 }}
                    key={item}
                    src={item}
                    alt={item}
                    onClick={() => this.props.thumbnailSelect(item, index)}
                />
                );
            })}
            </div>
        </div>
        );
    }
}

export default Thumbnail;