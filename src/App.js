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
    ]
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
    ]
  }
];
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cart cartItems={cartItems} />
      </div>
    );
  }
}

export default App;
