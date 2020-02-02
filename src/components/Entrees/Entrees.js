import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Header from '../Header'
import Footer from '../Footer'
import entrees from '../../data/entrees.json'
import '../Liste.css'
import Flip from 'react-reveal/Flip'

class Entrees extends Component {
    state = {
        search : ""
    }
    renderFilm = entree =>{
        return (
            <div>
                { entree.name }
            </div>
        )
    }
    onchange = e =>{
        this.setState({ search : e.target.value });
    }
  
    render () {
        const {search} = this.state;
        const filteredEntrees = entrees.filter( entree =>{
                return entree.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
        return (
            <div>
                <Header />
                <div className="bodyListe bgEntree">
                    <div className="searchBar">
                        <input placeholder="Rechercher une recette" onChange={this.onchange} className="inputSearchBar"/>
                    </div>
                    <div className="bodyListe2">
                            {filteredEntrees.map(({id, name}) => (
                                <Flip left key={id}>
                                    <Link to={`/entree/${id}`} 
                                          className="lien">
                                        <div className="card">
                                            {name}
                                        </div>
                                    </Link>
                                </Flip>
                            ))}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Entrees