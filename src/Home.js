import React from 'react';
import './index.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from './components/App';
import Api from './components/Api';
import About from  './components/About'
class Home extends React.Component{
    render(){
        return (
    <Router>
            <div id="container">
                <div id="menu-bar">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <Link className="navbar-brand" to="/">My React APP</Link>
  

  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/api">ApiDemo</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">About us</Link>
    </li>
  </ul>
</nav>
                </div>
                <div id="content">
                
           <Route path="/" exact component={App} ></Route>
           <Route path="/api" component={Api}></Route>
           <Route path="/about" component={About}></Route>
                </div>
            </div>
    </Router>
        )
    }
}

export default Home