import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./fonts/BanjaxNotchedBlack.otf";
import "./fonts/BanjaxNotchedBold.otf";
import "./fonts/BanjaxNotchedExtraLight.otf";
import "./fonts/BanjaxNotchedLight.otf";
import "./fonts/BanjaxNotchedMedium.otf";
import "./fonts/BanjaxNotchedRegular.otf";
import "./fonts/BanjaxNotchedUltra.otf";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
