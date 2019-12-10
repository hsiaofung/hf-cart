## install

yarn add hf-sidebar

## component

```javascript
<Sidebar>
```

## feature

- RWD
- 可設定左側欄或右側欄。

## API

- show : bool, 顯示側邊欄
- close: func, 關閉側邊欄函數。
- title: 側邊欄的 title。
- moveIn: "left|right"，左側欄或右側欄。 

## CSS

.sidebar-close-btn background : 可以更改 close 的 icon 圖片。<br>
.sidebar-close-btn left : 可以調整 close icon 的位置。<br>
.sidebar .sidebar-content .content-header .title: 可以更改標題的 style。

## Demo

```javascript
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
```
