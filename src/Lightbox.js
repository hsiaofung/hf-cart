import React, { Component } from "react";
import "./css/lightbox.css";

export default class Lightbox extends Component {
  click = () => {
    console.log("LLLL");
  };
  render() {
    return (
      <div className="lightbox">
        <div className="lightbox-content">
          <button onClick={this.click}>AAA</button>
        </div>
      </div>
    );
  }
}
