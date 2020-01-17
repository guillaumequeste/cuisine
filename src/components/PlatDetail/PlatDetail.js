import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './PlatDetail.css'


const plats = {
   100: { 
      titre: "plat 1",
      nbPersonnes: "4",
      ingredients: "tomate, citron, crêpes",
      tempsTotal: "30 min",
      tempsPreparation: "20 min",
      tempsCuisson: "10 min",
      preparation: "1. Faire les crêpes. \n 2. Positionner plusieurs couches de crêpes et les garnir avec les différents éléments. \n 3. Déguster le plat.",
      image: "plat1.jpg",
    },
    200: { 
        titre: "plat 2",
        nbPersonnes: "4",
        ingredients: "tomate, citron, crêpes",
        tempsTotal: "30 min",
        tempsPreparation: "20 min",
        tempsCuisson: "10 min",
        preparation: "première, deuxième, troisième",
        image: "plat2.jpg",
      },
    300: { 
        titre: "plat 3",
        nbPersonnes: "4",
        ingredients: "tomate, citron, crêpes",
        tempsTotal: "30 min",
        tempsPreparation: "20 min",
        tempsCuisson: "10 min",
        preparation: "première, deuxième, troisième",
        image: "plat3.jpg",
      }
}

/* J'aimerais tout mettre dans le fichier films.json et faire appel à lui dans la class ci-dessous au lieu d'appeler const films au-dessus */ 
class PlatDetail extends Component {
    render () {
        const requireImage = () => {
            try {
                return require(`../../img/${plats[this.props.match.params.id].image}`)
            } catch (err) {
                return require('../../img/paint.jpg')
            }
        }
        return (
            <div>
                <Header />
                <div className="fiche">
                    <div className="image">
                        <img src={requireImage(plats[this.props.match.params.id].image)} className="tailleImage" alt={this.props.match.params.titre}/>
                    </div>
                    <div className="description">
                        <h2 className="titreCard">{plats[this.props.match.params.id].titre}</h2>
                        <ul>
                            <li className="liCard"><strong>Titre : </strong>{plats[this.props.match.params.id].titre}</li>
                            <li className="liCard"><strong>Nombre de personnes : </strong>{plats[this.props.match.params.id].nbPersonnes}</li>
                            <li className="liCard"><strong>Ingrédients : </strong>{plats[this.props.match.params.id].ingredients}</li>
                            <li className="liCard"><strong>Temps total : </strong>{plats[this.props.match.params.id].tempsTotal}</li>
                            <li className="liCard"><strong>Temps de préparation : </strong>{plats[this.props.match.params.id].tempsPreparation}</li>
                            <li className="liCard"><strong>Temps de cuisson : </strong>{plats[this.props.match.params.id].tempsCuisson}</li>
                            <li className="liCard"><strong>Préparation : </strong>{plats[this.props.match.params.id].preparation}</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PlatDetail