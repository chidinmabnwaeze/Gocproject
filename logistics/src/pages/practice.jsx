import React from "react";
import { useState } from "react";

const practice = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "one bag of rice",
    },
    {
      id: 2,
      checked: false,
      item: "one bag of beans",
    },
    {
      id: 3,
      checked: false,
      item: "one bag of garri",
    },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => {
          <li className="item" key={item.id}>
            <input type="checkbox" name="input" id="" />

            <span>{items.item}</span>
          </li>;
        })}
      </ul>
    </main>
  );
};

export default practice;
