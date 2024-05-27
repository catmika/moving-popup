import React, { useState } from "react";
import "./App.css";

import emailjs from "@emailjs/browser";

function App() {
  const [position, setPosition] = useState({ top: "40%", left: "40%" });

  const yesSound = new Audio(`${process.env.PUBLIC_URL}/sexytime.mp3`);

  const movePopup = () => {
    const newTop = Math.random() * 70;
    const newLeft = Math.random() * 48;
    setPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  const handleYesClick = () => {
    yesSound.play();
    alert("Oh, you touch my talala, oh, my ding-ding-dong 😍🫣🤫😮‍💨😈💦");
    sendEmail();
  };

  const templateParams = {
    name: "Maksymka",
    notes: "YES!",
  };

  const sendEmail = () => {
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="App">
      <div className="popup" style={{ top: position.top, left: position.left }}>
        <h3>Джігі-джага сьогодні ввечері?)))</h3>
        <div className="btnWrapper">
          <button onClick={handleYesClick}>Yes!!!</button>
          <button onMouseOver={movePopup} onTouchStart={movePopup}>
            No:(
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
