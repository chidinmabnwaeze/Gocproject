import React from "react";

const addItems = () => {
  return (
    <form className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
      />
    </form>
  );
};

export default addItems;
