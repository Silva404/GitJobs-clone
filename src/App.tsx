import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Positions from "./pages/Positions";
import Home from "./pages/Home";
import JobProfile from "./pages/JobProfile";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import API from "./pages/API";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/results" element={<Results />} />
        <Route path="/positions/:id" element={<JobProfile />} />

        <Route path="/faq" element={<Faq />} />
        <Route path="/api" element={<API />} />
      </Routes>

      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
