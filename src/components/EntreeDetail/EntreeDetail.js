import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './EntreeDetail.css'


const entrees = {
    100: { 
       titre: "entree 1",
       nbPersonnes: "4",
       ingredients: "tomate, citron, crêpes",
       tempsTotal: "30 min",
       tempsPreparation: "20 min",
       tempsCuisson: "10 min",
       preparation: "première, deuxième, troisième",
       image: "entree1.jpg",
     },
     200: { 
         titre: "entree 2",
         nbPersonnes: "4",
         ingredients: "tomate, citron, crêpes",
         tempsTotal: "30 min",
         tempsPreparation: "20 min",
         tempsCuisson: "10 min",
         preparation: "première, deuxième, troisième",
         image: "entree1.jpg",
       },
     300: { 
         titre: "entree 3",
         nbPersonnes: "4",
         ingredients: "tomate, citron, crêpes",
         tempsTotal: "30 min",
         tempsPreparation: "20 min",
         tempsCuisson: "10 min",
         preparation: "première, deuxième, troisième",
         image: "entree1.jpg",
       }
 }

/* J'aimerais tout mettre dans le fichier films.json et faire appel à lui dans la class ci-dessous au lieu d'appeler const films au-dessus */ 
class EntreeDetail extends Component {
    render () {
        const requireImage = () => {
            try {
                return require(`../../img/${entrees[this.props.match.params.id].image}`)
            } catch (err) {
                return require('../../img/paint.jpg')
            }
        }
        return (
            <div>
                <Header />
                <div className="fiche">
                    <div className="image">
                        <img src={requireImage(entrees[this.props.match.params.id].image)} className="tailleImage" alt={this.props.match.params.titre}/>
                    </div>
                    <div className="description">
                        <h2 className="titreCard">{entrees[this.props.match.params.id].titre}</h2>
                        <ul>
                            <li className="liCard"><strong>Titre : </strong>{entrees[this.props.match.params.id].titre}</li>
                            <li className="liCard"><strong>Nombre de personnes : </strong>{entrees[this.props.match.params.id].nbPersonnes}</li>
                            <li className="liCard"><strong>Ingrédients : </strong>{entrees[this.props.match.params.id].ingredients}</li>
                            <li className="liCard"><strong>Temps total : </strong>{entrees[this.props.match.params.id].tempsTotal}</li>
                            <li className="liCard"><strong>Temps de préparation : </strong>{entrees[this.props.match.params.id].tempsPreparation}</li>
                            <li className="liCard"><strong>Temps de cuisson : </strong>{entrees[this.props.match.params.id].tempsCuisson}</li>
                            <li className="liCard"><strong>Préparation : </strong>{entrees[this.props.match.params.id].preparation}</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default EntreeDetail