import React from "react";
import Find from "./components/find/Find";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
    </div>
  );
}

export default App;
