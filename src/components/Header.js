import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Header.css'

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <Link to="/" className="itemsHeader"><img src={require("../img/cooking.png")} alt="cooking" style={{width: "55px"}}></img></Link>
                <Link to="/entrees" className="itemsHeader">Entrées</Link>
                <Link to="/plats" className="itemsHeader">Plats</Link>
                <Link to="/desserts" className="itemsHeader">Desserts</Link>
                <Link to="/contact" className="itemsHeader">Contact</Link>
            </div>
        )
    }
}

export default Header