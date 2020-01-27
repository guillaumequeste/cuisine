import React from 'react'
import { Link } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => (
  <>
    <Header />
    <div className="app">
      <div>
        <Link to="/entrees" className="lien">
          <div className="appCard">Entrées</div>
        </Link>
      </div>
      <div>
        <Link to="/plats" className="lien">
          <div className="appCard">Plats</div>
        </Link>
      </div>
      <div>
        <Link to="/desserts" className="lien">
          <div className="appCard">Desserts</div>
        </Link>
      </div>
    </div>
    <Footer />
  </>
)

export default App;