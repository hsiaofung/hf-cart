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
