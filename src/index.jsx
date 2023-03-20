import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Location from './pages/Location.jsx'
import Header from './components/Header.jsx'
import Error from './pages/Error.jsx'
import About from './pages/About.jsx'
import Footer from "./components/Footer.jsx"
import "./styles/app.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Location/:id">
          <Location />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
