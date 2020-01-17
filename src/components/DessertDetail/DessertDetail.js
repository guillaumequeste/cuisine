import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './DessertDetail.css'


const desserts = {
    100: { 
       titre: "dessert 1",
       nbPersonnes: "4",
       ingredients: "tomate, citron, crêpes",
       tempsTotal: "30 min",
       tempsPreparation: "20 min",
       tempsCuisson: "10 min",
       preparation: "1. Faire les crêpes. \n 2. Positionner plusieurs couches de crêpes et les garnir avec les différents éléments. \n 3. Déguster le plat.",
       image: "dessert1.jpeg",
     },
     200: { 
         titre: "dessert 2",
         nbPersonnes: "4",
         ingredients: "tomate, citron, crêpes",
         tempsTotal: "30 min",
         tempsPreparation: "20 min",
         tempsCuisson: "10 min",
         preparation: "première, deuxième, troisième",
         image: "dessert1.jpg",
       },
     300: { 
         titre: "dessert 3",
         nbPersonnes: "4",
         ingredients: "tomate, citron, crêpes",
         tempsTotal: "30 min",
         tempsPreparation: "20 min",
         tempsCuisson: "10 min",
         preparation: "première, deuxième, troisième",
         image: "dessert1.jpg",
       }
 }

/* J'aimerais tout mettre dans le fichier films.json et faire appel à lui dans la class ci-dessous au lieu d'appeler const films au-dessus */ 
class DessertDetail extends Component {
    render () {
        const requireImage = () => {
            try {
                return require(`../../img/${desserts[this.props.match.params.id].image}`)
            } catch (err) {
                return require('../../img/paint.jpg')
            }
        }
        return (
            <div>
                <Header />
                <div className="fiche">
                    <div className="part1">
                        <div className="part1a">
                            <div className="titreRecette">
                                {desserts[this.props.match.params.id].titre}
                            </div>
                            <div className="image">
                                <img src={requireImage(desserts[this.props.match.params.id].image)} className="tailleImage" alt={this.props.match.params.titre}/>
                            </div>
                        </div>
                        <div className="part1b">
                            <ul>
                                <li className="liCard"><strong>Nombre de personnes : </strong>{desserts[this.props.match.params.id].nbPersonnes}</li>
                                <li className="liCard"><strong>Temps total : </strong>{desserts[this.props.match.params.id].tempsTotal}</li>
                                    <ul>
                                        <li className="liCard2"><strong>Temps de préparation : </strong>{desserts[this.props.match.params.id].tempsPreparation}</li>
                                        <li className="liCard2"><strong>Temps de cuisson : </strong>{desserts[this.props.match.params.id].tempsCuisson}</li>
                                    </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="part2">
                        <li className="liCard"><strong>Ingrédients :</strong></li>
                        <li className="liCard3">{desserts[this.props.match.params.id].ingredients}</li>
                        <li className="liCard"><strong>Préparation : </strong></li>
                        <li className="liCard3">{desserts[this.props.match.params.id].preparation}</li>
                    </div>
                   
                </div>
                <Footer />
            </div>
        )
    }
}

export default DessertDetail