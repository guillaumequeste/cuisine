import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Detail.css'


const desserts = {
    1600: { 
       titre: "Pancakes",
       nbPersonnes: "5 pancakes",
       ingredients: "130g de préparation Aunt Jemima, 180mL de lait, 15mL d'huile neutre, 1 oeuf",
       tempsTotal: "10 min",
       tempsPreparation: "7 min",
       tempsCuisson: "3 min",
       preparation: "1. Mélanger le tout, sans battre, jusqu'à disparition des grumeaux. \n 2. Laisser reposer et s'épaissir la pâte pendant 1-2 minutes. \n 3. Faire chauffer une poêle à feu moyen doux (ou plaque électrique à 190°C). \n 4. Verser doucement la pâte dans la poêle chaude légèrement graissée pour former un pancake. \n 5. Faire cuire 1 minute 30 environ de chaque côté (retourner lorsque des bulles se forment et que la face prend une couleur marron-dorée).",
       image: "pancakes.jpeg",
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