import React from 'react'
import { Link } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => (
  <>
    <Header />
    <div className="app">
      <div className="appCard">
        <Link to="/entrees">Entrées</Link>
      </div>
      <div className="appCard">
        <Link to="/plats">Plats</Link>
      </div>
      <div className="appCard">
        <Link to="/desserts">Desserts</Link>
      </div>
    </div>
    <Footer />
  </>
)

export default App;