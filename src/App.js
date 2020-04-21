import React from 'react';
import Home from '../src/views/home/home';
import { BrowserRouter as Router , Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
      </Router>
      
    
    </div>
  );
}

export default App;
