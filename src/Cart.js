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
  get emptyCart() {
    const { cartIcon, whatsNew, emptyCart } = this.props;
    return (
      <div className="empty-cart">
        <div className="group-empty">
          <p className="row-icon">{cartIcon}</p>
          <p className="row1">{emptyCart.row1}</p>
          <p className="row2">{emptyCart.row2}</p>
        </div>
        <div className="row-button">
          <button onClick={whatsNew}>{emptyCart.buttonText}</button>
        </div>
      </div>
    );
  }

  getComma(length, index) {
    const isLastItem = (length, index) => {
      return length - index === 1;
    };
    /*最後一個項目不需要逗點*/
    if (isLastItem(length, index)) return " ";
    return "，";
  }
  get cartContent() {
    const {
      cartItems,
      removeCartItem,
      totalPrice,
      totalName,
      checkout,
      checkoutBtnText
    } = this.props;

    return (
      <div className="cart-content">
        <div className="cart-subtotal">
          <span className="cart-subtotal-name">{totalName}</span>
          <span className="cart-subtotal-price">{totalPrice}</span>
        </div>
        <button className="checkout-btn" onClick={checkout}>
          {checkoutBtnText}
        </button>
        <div className="cart-content-body">
          <table className="cart-table">
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="cartItem-img">
                    {/*商品圖片 */}
                    <img
                      src={item.imgUrl}
                      alt={`${item.collection}${item.name}`}
                    ></img>
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
                          {/*逗點*/}
                          {this.getComma(item.options.length, index)}
                        </span>
                      ))}
                    </p>
                    {/*商品價格*/}
                    <p className="cartItem-text-price">{item.price}</p>
                  </td>
                  {/*移除按鈕*/}
                  <td className="cartItem-remove">
                    <button
                      className="cartItem-remove-btn"
                      onClick={() => removeCartItem(item)}
                    ></button>
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
    const { cartIcon, cartTitle, cartItems } = this.props;

    return (
      <div className="cart">
        {/* <div
          style={{
            borderBottom: "1px solid grey",
            height: "80px",
            lineHeight: "80px",
            textAlign: "right",
            paddingRight: "20px"
          }}
        > */}
          <button className="cart-btn" onClick={this.openSidebar}>
            {cartIcon}
            <span className="cart-btn-number">{cartItems.length}</span>
          </button>
        {/* </div> */}
        <Sidebar
          show={this.state.moveIn}
          close={this.closeSidebar}
          title={cartTitle}
        >
          {cartItems.length > 0 ? this.cartContent : this.emptyCart}
        </Sidebar>
      </div>
    );
  }
}

Cart.defaultProps = {
  cartTitle: (
    <>
      <span className="icon-block icon icon-cart"></span>
      我的購物車
    </>
  ),
  cartIcon: <span className="icon icon-cart"></span>,
  cartItems: [],
  totalName: "小計",
  totalPrice: "0",
  checkoutBtnText: `結帳0件商品`,
  removeCartItem: () => console.log("/*Default removeCartItem func. empty*/"),
  checkout: () => console.log("/*Default checkout function empty*/"),
  whatsNew: () => console.log("/*Default whatsNew func. empty!*/"),
  emptyCart: {
    row1: "一切還好嗎?",
    row2: "你的購物袋是空的。",
    buttonText: "了解最新商品"
  }
};
