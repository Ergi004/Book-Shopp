import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookRecommendation from "./components/BookRecommendation";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemQty, setItemQty] = useState(0);
  const [itemsCost, setItemsCost] = useState(0);

  const sumItemsCosts = (price) => {
    console.log(price)
    setItemsCost(parseInt(itemsCost + price));
  };

  const addItemQty = () => {
    setItemQty(itemQty + 1);
  };

  const handleAddToCart = (book) => {
    const newCartItems = [...cartItems];
    newCartItems.push(book);
    setCartItems(newCartItems);
    console.log("heello my niggas", book);
  };

  const handleRemove = (id) => {
    const newCartItems = cartItems.filter((book) => book.primary_isbn10 !== id);
    setItemQty(itemQty - 1)
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path=""
            element={
              <BookRecommendation
                handleAddToCart={handleAddToCart}
                addItemQty={addItemQty}
                sumItemsCosts={sumItemsCosts}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cartItems={cartItems}
                handleRemove={handleRemove}
                itemQty={itemQty}
                itemsCost={itemsCost}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
