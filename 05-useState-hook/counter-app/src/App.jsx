import { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(0);

  const incrementCounter = (n = 1) => {
    if (counter >= 5) return;
    const newCounter = counter + n;
    setCounter(newCounter);
    console.log(`Current value of counter : ${counter}`);
  };

  const decrementCounter = (n = 1) => {
    if (counter <= -5) return;
    const newCounter = counter - n;
    setCounter(newCounter);
    console.log(`Current value of counter : ${counter}`);
  };

  return (
    <>
      <h1 className="flex justify-center items-center bg-gray-100 w-full h-screen">
        <div className="bg-white shadow-lg p-8 border rounded-xl text-center">
          <h1 className="mb-6 font-bold text-3xl">Counter App</h1>
          <div>
            <h2 className="mb-4 font-medium text-xl">
              {" "}
              Counter value : {counter}
            </h2>
            <dir className="flex justify-center gap-4">
              <button
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium text-white active:scale-95 transition"
                onClick={() => incrementCounter(1)}
              >
                Increment
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium text-white active:scale-95 transition"
                onClick={() => decrementCounter(1)}
              >
                Decrement
              </button>
            </dir>
          </div>
        </div>
      </h1>
    </>
  );
}
