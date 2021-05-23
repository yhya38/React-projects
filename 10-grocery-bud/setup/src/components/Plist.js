import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import List from "../List";

function Plist({ item, removeItem, editItem }) {
  return (
    <div className="grocery-list">
      {item.map((item) => {
        const { title, id } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={()=>editItem(id)}>
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Plist;
