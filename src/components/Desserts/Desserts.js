import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Header from '../Header'
import Footer from '../Footer'
import desserts from '../../data/desserts.json'
import './Desserts.css'

class Desserts extends Component {
    state = {
        search : ""
    }
    renderFilm = dessert =>{
        return (
            <div>
                { dessert.name }
            </div>
        )
    }
    onchange = e =>{
        this.setState({ search : e.target.value });
    }
  
    render () {
        const {search} = this.state;
        const filteredDesserts = desserts.filter( dessert =>{
                return dessert.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
        return (
            <div>
                <Header />
                <div className="bodyDesserts">
                    <div className="searchBar">
                        <input placeholder="Rechercher une recette" onChange={this.onchange} className="inputSearchBar"/>
                    </div>
                    <div className="bodyListeDesserts">
                        {filteredDesserts.map(({id, name}) => (
                            <Link to={`/dessert/${id}`} 
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

export default Desserts