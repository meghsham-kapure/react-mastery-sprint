import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
  };

  const incrementFunctional = () => {
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-2xl">Current Value: {value}</h1>

      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          onClick={() => increment()}
        >
          Increment By 5 by Direct Update
        </button>

        <button
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
          onClick={() => incrementFunctional()}
        >
          Increment By 5 by Functional Updates
        </button>
      </div>
    </div>
  );
}
