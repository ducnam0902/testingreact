import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [checkedBox, setCheckedBox] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) => setCheckedBox(event.target.checked)}
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checkedBox}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
