import { useState } from "react";
import ColorButton from "./components/ColorButton.jsx";

export default function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      className="flex justify-center items-end pb-10 w-full h-screen transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-center items-center bg-white shadow-lg border-2 rounded-full w-1/2 h-20">
        <ColorButton color="red" setColor={setBgColor} />
        <ColorButton color="blue" setColor={setBgColor} />
        <ColorButton color="green" setColor={setBgColor} />
        <ColorButton color="yellow" setColor={setBgColor} />
        <ColorButton color="pink" setColor={setBgColor} />
        <ColorButton color="purple" setColor={setBgColor} />
      </div>
    </div>
  );
}
