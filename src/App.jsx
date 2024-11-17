import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'; // Corrected import
import About from './About';
import NewsLetter from './NewsLetter';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage';
import CockTailDet from './CockTailDet';

const App = () => {
  return (
    <div>
      {/* Navbar is rendered once at the top */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="newsletter" element={<NewsLetter />} />
        <Route path='cocktail/:id' element={<CockTailDet></CockTailDet>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
