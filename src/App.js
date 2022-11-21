import React from "react";
import Driver from "./components/driver/Driver";
import Find from "./components/find/Find";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
      <Driver />
    </div>
  );
}

export default App;
