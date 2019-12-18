## install

yarn add hf-cart

## component

```javascript
<Cart>
```

## feature

- RWD
- 支援購物車按鈕和購物車下拉式內容。
- 支援購物車數量顯示。
- 支援空購物車的顯示。
- 支援購物車 default 值。

## API

- cartItems : [], 購物車的商品項目。需提供
  - item.imgUrl: 商品圖片。
  - item.collection: 商品系列。
  - item.name:商品名稱。
  - item.options: 商品的選項。
    - 每一個選項包含{name:"",value:""}
  - item.price:商品的價格。
- totalName: string, 小計的名稱。
- totalPrice: string, 小計的價格。
- cartTitle: 購物車 title。
- cartIcon: 購物車 icon。
- checkoutBtnText:購物車結帳按鈕文字。需提供，default 值是寫死"結帳 0 件商品"
- removeCartItem: func, 移除購物車商品。
- checkout: func, 結帳。
- emptyCart: {}, 空購物車的內容。
  - row1 : 第一列的內容。
  - row2 : 第二列的內容。
  - buttonText: 空購物車了解最新商品的按鈕。
- whatsNew: func, 空購物車，了解最新商品按鈕的行為。

## CSS

- .cart-btn : 購物車按鈕
- .cart-btn .icon-cart: 購物車按鈕中的 icon
- .cart-btn .cart-btn-number: 購物車按鈕右上方的數量
- .empty-cart: 空購物車
- .cart-content: 購物車的內容
- .cart-subtotal: 購物車小計
- .cart-subtotal-price: 購物車小計的價格
- .checkout-btn: 購物車 checkout btn
- .cartItem-remove-btn : 購物車商品移除按鈕
- .cart-table : 購物車 table

## Demo

```javascript
import React from "react";
import Cart from "./Cart";

const cartItems = [
  {
    imgUrl:
      "https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/90754/44aacc26b80d09543d087d16425d6dc7.jpg",
    collection: "Fingers Play 「指玩」",
    name: "18K黃金戒指",
    options: [
      { name: "數量", value: "1" },
      { name: "材質", value: "18K" },
      { name: "紅色黃金，長度", value: "45厘米" }
    ],
    price: "HK$1,400.00"
  },
  {
    imgUrl:
      "https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91302/759c105974897ccb59dccd6aa5ded818.jpg",
    collection: "Fingers Play 「指玩」",
    name: "18K黃金戒指",
    options: [
      { name: "數量", value: "1" },
      { name: "材質", value: "18K" },
      { name: "紅色黃金，長度", value: "45厘米" }
    ],
    price: "HK$1,500.00"
  }
];
const total = { name: "小計", price: "$9,100.00" };
const emptyCart = {
  row1: "Nothing!",
  row2: "Is everything OK?",
  buttonText: "What's New"
};

class App extends React.Component {
  removeCartItem = cartItem => {
    console.log("/*Action remove cart item Here!*/", cartItem);
  };
  checkout = () => {
    console.log("/*Action checkout Here!*/");
    window.location = `/checkout`;
  };
  whatsNew = () => {
    console.log("/*Action what's New Here!*/");
    window.location = `/whatsNew`;
  };
  get checkoutBtnText() {
    return `結帳${cartItems.length}件商品`;
  }
  render() {
    return (
      <div className="App">
        <div
          style={{
            borderBottom: "1px solid grey",
            height: "80px",
            lineHeight: "80px",
            textAlign: "left",
            paddingRight: "20px"
          }}
        >
          <Cart
            cartItems={cartItems}
            totalName={total.name}
            totalPrice={total.price}
            removeCartItem={this.removeCartItem}
            checkout={this.checkout}
            whatsNew={this.whatsNew}
            checkoutBtnText={this.checkoutBtnText}
          />
        </div>
      </div>
    );
  }
}

export default App;
```
