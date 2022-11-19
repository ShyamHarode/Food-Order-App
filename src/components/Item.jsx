import React, { useState, useEffect } from "react";

const Item = ({ item, index, add, remove, cart }) => {
  const [obj, setObj] = useState({});
  const [count, setCount] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      for (let i of cart) {
        if (i.name === item.name) {
          setObj(i);
          setCount(i.qty);
          setCost(i.price);
        }
      }
    } else {
      setObj({});
    }
  }, [cart, remove]);

  return (
    <div className="w-72 rounded border border-gray overflow-hidden shadow-lg">
      <img className="w-full h-56" src={`assets/${item.image}`} alt="item" />
      <div className="px-6 py-4">
        <div className="font-bold mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">Price: {item.price}</p>
        {obj.qty && (
          <div>
            <p className="text-gray-700 text-base">Total: {count}</p>
            <p className="text-gray-700 text-base">Cost: {cost}</p>
          </div>
        )}
      </div>
      {console.log(obj)}
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => remove(index)}
          className="bg-blue-600 p-1 btn m-2"
        >
          -
        </button>
        <button onClick={() => add(index)} className="bg-rose-600 p-1 btn m-2">
          +
        </button>
      </div>
    </div>
  );
};

export default Item;
