import React, { Component } from "react";
import "./css/sidebar.css";

export default class Sidebar extends Component {
  get contentShow() {
    const { show, moveIn } = this.props;
    if (show) return `sidebar-content sidebar-content-${moveIn}-show`;
    return `sidebar-content sidebar-content-${moveIn}-hidden`;
  }
  render() {
    const { show, close, moveIn, title } = this.props;
    return (
      <div className={show ? "sidebar sidebar-show" : "sidebar sidebar-hidden"}>
        <div className={this.contentShow}>
          <div className="content-header">
            <button className="sidebar-close-btn" onClick={close}></button>
            <div className="title">{title}</div>
          </div>
          <div className="content-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  moveIn: "right",
  show: false,
  close: () => {
    console.log("/*You didn't assign close function to Sidebar close btn.*/");
  }
};
