import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './route';


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
