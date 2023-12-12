import "../App.css";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import MenuForm from "../Components/MenuForm";

const API = "http://localhost:8001/menu";

export default function Menu() {
  const [menu, setMenu] = useState({});

  const [selectedField, setSelectedField] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setMenu);
  }, []);

  function handleUpdate(newMenu) {
    fetch(API, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenu),
    });
    setMenu(newMenu);
  }

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const style = {
    fontFamily: "Roboto",
    padding: "2px",
    fontSize: "16px",
  };

  const buttonStyle = {
    fontFamily: "Roboto",
    padding: "6px",
    backgroundColor: "#BF41B7",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "12px",
  };

  return (
    <>
      <main>
        <Header />
        <br />
        <NavBar />
      </main>
      <div className="mainComponent">
        <h2>Today's Menu</h2>
        <h3>{date}</h3>
        <div className="menu">
          {Object.entries(menu).map(([course, mealName]) => (
            <>
              <h4>{course}</h4>
              {selectedField === course ? (
                <>
                  <input
                    style={style}
                    type="text"
                    value={mealName}
                    onChange={(e) => {
                      const updatedMenu = { ...menu };
                      updatedMenu[course] = e.target.value;
                      handleUpdate(updatedMenu);
                    }}
                  />{" "}
                  <button
                    style={buttonStyle}
                    onClick={() => setSelectedField(course)}
                  >
                    Edit
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => setSelectedField(!selectedField)}
                  >
                    Done/Cancel
                  </button>
                </>
              ) : (
                <>
                  <p>
                    {mealName}{" "}
                    <button
                      style={buttonStyle}
                      onClick={() => setSelectedField(course)}
                    >
                      Edit
                    </button>
                  </p>
                </>
              )}
            </>
          ))}
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
