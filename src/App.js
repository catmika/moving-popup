import React, { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ top: "40%", left: "40%" });

  const movePopup = () => {
    const newTop = Math.random() * 70;
    const newLeft = Math.random() * 48;
    setPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  return (
    <div className="App">
      <div className="popup" style={{ top: position.top, left: position.left }}>
        <p>Вірт сьогодні ввечері?)))</p>
        <div className="btnWrapper">
          <button
            onClick={() => alert("Чекаю тебе в редрумі, маленька 😍🫣🤫😮‍💨😈💦")}
          >
            Yes!!!
          </button>
          <button onMouseOver={movePopup} onTouchStart={movePopup}>
            No:(
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
