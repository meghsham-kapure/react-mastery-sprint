import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    const newCounter = counter + 1;
    if (newCounter >= 20) return;
    setCounter(newCounter);
    console.log(`Current value of counter : ${counter}`);
  };

  const decrementCounter = () => {
    const newCounter = counter - 1;
    if (newCounter <= -20) return;
    setCounter(newCounter);
    console.log(`Current value of counter : ${counter}`);
  };

  const incrementCounterByFive = () => {
    const newCounter = counter + 5;
    if (newCounter >= 20) return;
    setCounter(newCounter);
    console.log(`Current value of counter : ${counter}`);
  };

  const decrementCounterByFive = () => {
    const newCounter = counter - 5;
    if (newCounter <= -20) return;
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
                onClick={() => incrementCounter()}
              >
                Increment to {counter + 1}
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium text-white active:scale-95 transition"
                onClick={() => decrementCounter()}
              >
                Decrement to {counter - 1}
              </button>
            </dir>

            <dir className="flex justify-center gap-4 m-5">
              <button
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium text-white active:scale-95 transition"
                onClick={() => incrementCounterByFive()}
              >
                Increment by 5 to {counter + 5}
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium text-white active:scale-95 transition"
                onClick={() => decrementCounterByFive()}
              >
                Decrement by 5 to {counter - 5}
              </button>
            </dir>
          </div>
        </div>
      </h1>
    </>
  );
};

export default Counter;
