import React, { Component } from "react";
import Sidebar from "hf-sidebar";
import "./css/cart.css";
import "./css/style.css";

export default class Cart extends Component {
  state = {
    moveIn: false
  };
  openSidebar = () => {
    this.setState({
      moveIn: true
    });
  };
  closeSidebar = () => {
    this.setState({
      moveIn: false
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
  get cartContent() {
    const { cartItems } = this.props;

    return (
      <div className="cart-content">
        <div className="cart-subtotal">
          <span className="cart-subtotal-name">小計</span>
          <span className="cart-subtotal-price">$1,400.00</span>
        </div>
        <button className="checkout-btn">{`結帳${cartItems.length}件商品`}</button>
        <div className="cart-content-body">
          <table className="cart-table">
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="cartItem-img">
                    {/*商品圖片 */}
                    <img src={item.imgUrl}></img>
                  </td>
                  <td className="cartItem-text">
                    {/*商品title*/}
                    <p className="cartItem-text-title">{item.collection}</p>
                    <p className="cartItem-text-title">{item.name}</p>
                    {/*商品選項，數量*/}
                    <p className="cartItem-text-detail">
                      {item.options.map((text, index) => (
                        <span key={index}>
                          {text.name}：{text.value}
                        </span>
                      ))}
                    </p>
                    {/*商品價格*/}
                    <p className="cartItem-text-price">HK$1,400.00</p>
                  </td>
                  {/*移除按鈕*/}
                  <td className="cartItem-remove">
                    <button className="cartItem-remove-btn"></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  render() {
    const { cartItems } = this.props;

    return (
      <div className="cart">
        <div style={{ borderBottom: "1px solid grey" }}>
          <button onClick={this.openSidebar}>open right</button>
        </div>
        <Sidebar
          show={this.state.moveIn}
          close={this.closeSidebar}
          title={this.title}
        >
          {cartItems.length > 0 ? this.cartContent : this.emptyCart}
        </Sidebar>
      </div>
    );
  }
}

Cart.defaultProps = {
  cartItems: []
};
