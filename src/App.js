import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompetencyList from './components/pages/CompetencyList';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AppDev from './components/pages/AppDev';
import Statistics from './components/pages/Statistics';

 const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<CompetencyList />} />
          <Route path="/AppDev" exact element={<AppDev />} />
          <Route path="/Stat" exact element={<Statistics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
