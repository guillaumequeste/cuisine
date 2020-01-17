import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Header from '../Header'
import Footer from '../Footer'
import plats from '../../data/plats.json'
import './Plats.css'

class Plats extends Component {
    state = {
        search : ""
    }
    renderFilm = plat =>{
        return (
            <div>
                { plat.name }
            </div>
        )
    }
    onchange = e =>{
        this.setState({ search : e.target.value });
    }
  
    render () {
        const {search} = this.state;
        const filteredPlats = plats.filter( plat =>{
                return plat.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
        return (
            <div>
                <Header />
                <div className="bodyPlats">
                    <div className="searchBar">
                        <input placeholder="Rechercher une recette" onChange={this.onchange} className="inputSearchBar"/>
                    </div>
                    <div className="bodyListePlats">
                            {filteredPlats.map(({id, name}) => (
                                <Link to={`/plat/${id}`} 
                                        key={id}>
                                    <div className="card">
                                        {name}
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Plats