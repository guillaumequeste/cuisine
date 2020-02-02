import React from 'react'
import { Link } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Flip from 'react-reveal/Flip'

const App = () => (
  <>
    <Header />
    <div className="app">
      <Flip left>
        <div>
          <Link to="/entrees" className="lien">
            <div className="appCard">Entrées</div>
          </Link>
        </div>
      </Flip>
      <Flip left>
        <div>
          <Link to="/plats" className="lien">
            <div className="appCard">Plats</div>
          </Link>
        </div>
      </Flip>
      <Flip left>
        <div>
          <Link to="/desserts" className="lien">
            <div className="appCard">Desserts</div>
          </Link>
        </div>
      </Flip>
    </div>
    <Footer />
  </>
)

export default App;