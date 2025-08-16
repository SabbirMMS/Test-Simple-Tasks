import React, { useState } from "react";
import Home from "./components/home";
import Login from "./components/login";
import About from "./components/about";

const App = () => {
  const [activeState, setActiveState] = useState(0);

  const handleBtnClick = (state) => {
    setActiveState(state);
  };

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="text-center text-2xl font-bold">Task - 1</h1>
      <a
        href="https://sabbirmms.github.io"
        className="text-center text-lg block"
        target="_blank"
      >
        Monjel Morshed Sabbir
      </a>

      <div className="flex mt-12 gap-2">
        <button
          className={`px-3 py-2 ${
            activeState == 0 ? "bg-gray-900" : "bg-gray-600"
          } rounded-2xl text-lg font-bold text-white hover:bg-gray-900`}
          onClick={() => handleBtnClick(0)}
        >
          Home
        </button>

        <button
          className={`px-3 py-2 ${
            activeState == 1 ? "bg-gray-900" : "bg-gray-600"
          } rounded-2xl text-lg font-bold text-white hover:bg-gray-900`}
          onClick={() => handleBtnClick(1)}
        >
          Login
        </button>

        <button
          className={`px-3 py-2 ${
            activeState == 2 ? "bg-gray-900" : "bg-gray-600"
          } rounded-2xl text-lg font-bold text-white hover:bg-gray-900`}
          onClick={() => handleBtnClick(2)}
        >
          About
        </button>
      </div>

      <section className="py-5">
        {activeState == 0 ? <Home /> : activeState == 1 ? <Login /> : <About />}
      </section>
    </div>
  );
};

export default App;
