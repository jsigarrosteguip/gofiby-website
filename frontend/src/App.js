import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ClaimsBook from './pages/ClaimsBook';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/libro-reclamaciones" element={<ClaimsBook />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;