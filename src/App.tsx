import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Positions from "./pages/Positions";
import Home from "./pages/Home";
import JobProfile from "./pages/JobProfile";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/positions/:id" element={<JobProfile/>} />
      </Routes>

      {/* <Footer /> */}
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
