import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar.js';
import NewsCom from './component/NewsCom';
import Footer from './component/Footers.js';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from "react-router-dom";

export class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
           <Navbar/>
           <Routes>
             <Route exact path="/" element={<NewsCom key="Home" catagory="General"/>} />
             <Route exact path="/Entertainment" element={<NewsCom key="Entertainment" catagory="Entertainment"/>} />
             <Route exact path="/General" element={<NewsCom key="General" catagory="General"/>} />
             <Route exact path="/Health" element={<NewsCom key="health" catagory="health"/>} />
             <Route exact path="/Science" element={<NewsCom key="Science" catagory="Science"/>} />
             <Route exact path="/Technology" element={<NewsCom key="Technology" catagory="Technology"/>} />
             <Route exact path="/sports" element={<NewsCom key="sports" catagory="sports"/>} />
           </Routes>
            
            <Footer/>
        </Router>
      </div>
    )
  }
}

export default App
