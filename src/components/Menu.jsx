import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useContext } from "react";
import { UserContext } from "../App";
import OrderSummary from "./OrderSummary";

const Menu = () => {
  const { items, cart, setCart, showModal, setShowCart } =
    useContext(UserContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setShowCart(true);
    let sum = 0;
    for (let item of cart) {
      let p = Number(item.price);
      sum += p;
    }
    setTotalPrice(sum);
  }, [cart]);

  const addToCart = (idx) => {
    const newItem = {
      id: idx,
      name: items[idx].name,
      price: items[idx].price,
      qty: 1,
    };
    let exist = cart.some((i) => i.id === idx);
    if (exist) {
      const updateCart = cart.map((i) => {
        if (i.id === idx) {
          return { ...i, qty: i.qty + 1, price: (i.qty + 1) * newItem.price };
        } else {
          return i;
        }
      });
      setCart(updateCart);
    } else {
      // setCartItem(newItem);
      const cc = [...cart];
      cc.push(newItem);
      setCart(cc);
    }
  };
  const removeFromCart = (idx) => {
    const newItem = {
      id: idx,
      name: items[idx].name,
      price: items[idx].price,
      qty: 1,
    };
    let exist = cart.some((i) => i.id === idx);
    if (exist) {
      const updateCart = cart.map((i) => {
        if (i.id === idx) {
          return { ...i, qty: i.qty - 1, price: (i.qty - 1) * newItem.price };
        } else {
          return i;
        }
      });
      const newCart = updateCart.filter((i) => i.qty > 0);
      setCart(newCart);
    }
  };

  return (
    <div className="flex m-14 gap-6 flex-wrap ">
      {items.map((item, idx) => {
        return (
          <Item
            key={idx}
            item={item}
            index={idx}
            add={addToCart}
            remove={removeFromCart}
            cart={cart}
          />
        );
      })}
      {showModal && (
        <OrderSummary
          add={addToCart}
          remove={removeFromCart}
          total={totalPrice}
        />
      )}
    </div>
  );
};

export default Menu;
