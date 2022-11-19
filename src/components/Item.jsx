import React, { useState, useEffect } from "react";

const Item = ({ item, index, add, remove, cart }) => {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      let f = cart.some((i) => {
        if (i.name === item.name) {
          setCount(i.qty);
          setCost(i.price);
          return true;
        } else {
          return false;
        }
      });
      if (f) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    } else {
      setFlag(false);
    }
  }, [cart, remove]);

  return (
    <div className="w-72 rounded border border-gray overflow-hidden shadow-lg">
      <img className="w-full h-56" src={`assets/${item.image}`} alt="item" />
      <div className="px-6 py-4">
        <div className="font-bold mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">Price: {item.price}</p>
        {flag && (
          <div>
            <p className="text-gray-700 text-base">Total: {count}</p>
            <p className="text-gray-700 text-base">Cost (INR) : {cost}</p>
          </div>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => add(index)}
          className="bg-indigo-800 px-8 py-1 btn m-2 text-center rounded"
        >
          +
        </button>
        <button
          onClick={() => remove(index)}
          className={`${
            flag ? "bg-rose-600" : "bg-gray-300"
          }  px-8 py-1  btn m-2 rounded text-center`}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Item;
