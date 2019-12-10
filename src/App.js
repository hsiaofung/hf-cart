import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "./style.css";

class App extends React.Component {
  state = {
    moveIn: false,
    showLightbox: false
  };
  click = () => {
    this.setState({
      moveIn: true
    });
  };
  clickShowLightbox = () => {
    this.setState({
      showLightbox: true
    });
  };
  moveOut = () => {
    this.setState({
      moveIn: false
    });
  };
  closeLightbox = () => {
    this.setState({
      showLightbox: false
    });
  };
  get title() {
    return (
      <>
        <span className="icon-block icon icon-cart"></span>我的購物車
      </>
    );
  }
  get emptyCart() {
    return (
      <div className="empty-cart">
        <div className="group-empty">
          <p className="row-icon">
            <span className="icon icon-cart"></span>
          </p>
          <p className="row1">一切還好嗎?</p>
          <p className="row2">你的購物袋是空的。</p>
        </div>
        <div className="row-button">
          <button>了解最新商品</button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <div style={{ borderBottom: "1px solid grey" }}>
          <button onClick={this.click}>open right</button>
        </div>
        <Sidebar
          show={this.state.moveIn}
          close={this.moveOut}
          title={this.title}
        >
          {this.emptyCart}
        </Sidebar>
        <div
          style={{ border: "1px solid red", width: "480px", padding: "40px" }}
        >
          AAAAAA
        </div>

        <button>KKKK</button>
      </div>
    );
  }
}

export default App;
