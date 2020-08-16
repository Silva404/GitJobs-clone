import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Jobs from './pages/Jobs'
import JobPosition from './pages/JobPosition'

function App() {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/"  element={<Jobs />} />
      <Route path="/positions"  element={<Jobs />} />
      <Route path="/positions/:id"  element={<JobPosition />} />
    </Routes>

    {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
