import "../App.css";
import { useState } from "react";
function DateInvite() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  function moveNoButton() {
    const randomTop = Math.floor(Math.random() * 300);
    const randomLeft = Math.floor(Math.random() * 400);
    setPosition({ top: randomTop, left: randomLeft });
  }
  return (
    <section className="invite">
      <div className="invite-card">
        <p className="invite-small">У мене є одне питання...</p>
        <h1>Підеш зі мною на побачення? 💌</h1>
        <div className="invite-buttons">
          <button className="yes-btn">Так❤️</button>
          <button
            className="no-btn"
            onMouseEnter={moveNoButton}
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
          >
            Ні🙈
          </button>
        </div>
      </div>
    </section>
  );
}
export default DateInvite;
