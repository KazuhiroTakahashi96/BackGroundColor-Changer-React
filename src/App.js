import { useState } from "react";
import "./App.css";

function App() {
  const [color1, setColor1] = useState(0);
  const [color2, setColor2] = useState(0);
  const [color3, setColor3] = useState(0);

  const num = () => {
    return Math.floor(Math.random() * 256);
  };

  const changeColor = () => {
    setColor1(num);
    setColor2(num);
    setColor3(num);
    document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  };

  return (
    <div>
      <p className="color">
        RGB({color1}, {color2}, {color3})
      </p>
      <button className="btn" onClick={changeColor}>
        Change BackGround Color
      </button>
    </div>
  );
}

export default App;
