// import React, { useState, useEffect } from "react";
// import List from "./List";
// import Alert from "./Alert";

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     return JSON.parse(localStorage.getItem("list"));
//   } else {
//     return [];
//   }
// };

// function App() {
//   const [name, setName] = useState("");
//   const [list, setList] = useState(getLocalStorage);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editID, setEditID] = useState(null);
//   const [alert, setAlert] = useState({
//     show: false,
//     msg: "",
//     type: "",
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) {
//       showAlert(true, "danger", "please enter value");
//     } else if (name && isEditing) {
//       setList(
//         list.map((item) => {
//           if (item.id === editID) {
//             return { ...item, title: name };
//           }
//           return item;
//         })
//       );
//       setName("");
//       setEditID(null);
//       setIsEditing(false);
//       showAlert(true, "success", "value changed");
//     } else {
//       showAlert(true, "success", "item added to the list");
//       const newItem = { id: new Date().getTime().toString(), title: name };
//       setList([...list, newItem]);
//       setName("");
//     }
//   };
//   const showAlert = (show = false, type = "", msg = "") => {
//     setAlert({ show, type, msg });
//   };
//   const clearList = () => {
//     showAlert(true, "danger", "empty list");
//     setList([]);
//   };
//   const removeItem = (id) => {
//     showAlert(true, "danger", "item removed");
//     const newList = list.filter((item) => item.id !== id);
//     setList(newList);
//   };
//   const editItem = (id) => {
//     const specificeItem = list.find((item) => item.id === id);
//     setIsEditing(true);
//     setEditID(id);
//     setName(specificeItem.title);
//   };
//   useEffect(() => {
//     localStorage.setItem("list", JSON.stringify(list));
//   }, [list]);
//   return (
//     <section className="section-center">
//       <form className="grocery-form" onSubmit={handleSubmit}>
//         {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
//         <h3>grocery bud</h3>
//         <div className="form-control">
//           <input
//             type="text"
//             className="grocery"
//             placeholder="eg. eggs"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button type="submit" className="submit-btn">
//             {isEditing ? "edit" : "submit"}
//           </button>
//         </div>
//       </form>
//       {list.length > 0 && (
//         <div className="grocery-container">
//           <List items={list} removeItem={removeItem} editItem={editItem} />
//           <button className="clear-btn" onClick={clearList}>
//             clear items
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import PList from "./components/Plist";
import Alert from "./components/PAlert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [alertmsg, setAlertMsg] = useState({ msg: "", color: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setShow(true);
      setAlertMsg({ msg: "please enter a value", color: "danger" });
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setShow(true);
      setAlertMsg({ msg: "item edited", color: "success" });
      setIsEditing(false);
      setName("");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      setShow(true);
      setAlertMsg({ msg: "item added", color: "success" });
    }
  };

  const clearItem = () => {
    setShow(true);
    setAlertMsg({ msg: "list cleared", color: "danger" });
    setList([]);
  };

  const deleteItem = (id) => {
    setShow(true);
    setAlertMsg({ msg: "item deleted", color: "danger" });
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setName(specificItem.title);
    setEditId(id);
  };

  return (
    <section className="section-center">
      <form className="grocery-form">
        {show && <Alert {...alertmsg} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g.eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <PList item={list} removeItem={deleteItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearItem}>
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
