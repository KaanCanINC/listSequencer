import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from './App.jsx'
import './main.css'
import Sorter from './pages/Sorter/Sorter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
    <Routes>
      {/* This route is for home component 
with exact path "/", in component props 
we passes the imported component*/}
      <Route
        exact
        path="/"
        element={<App />}
      />

      {/* This route is for about component 
with exact path "/about", in component 
props we passes the imported component*/}
      <Route
        path="/Sorter"
        element={<Sorter />}
      />

    </Routes>
  </Router>
)
