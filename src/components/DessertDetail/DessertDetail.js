import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Detail.css'
import Flip from 'react-reveal/Flip'


const desserts = {
    300: { 
        titre: "Crêpes",
        nbPersonnes: "5 pancakes",
        ingredients: ["- 250g de farine", <br />, "- 1 pincée de sel", <br />, "- 3 oeufs", <br />, "- 10 cL d'huile", <br />, "- 1/2 L de lait"],
        tempsTotal: "5 min",
        tempsPreparation: "5 min",
        tempsCuisson: "-",
        preparation: ["1. Mélanger le tout afin d'obtenir un mélange fluide.", <br />, <br />, "2. Laisser reposer 2 heures."],
        image: "crepes.jpg",
      },
    1600: { 
       titre: "Pancakes",
       nbPersonnes: "5 pancakes",
       ingredients: ["- 130g de préparation Aunt Jemima", <br />, "- 180mL de lait", <br />, "- 15mL d'huile neutre", <br />, "- 1 oeuf"],
       tempsTotal: "10 min",
       tempsPreparation: "7 min",
       tempsCuisson: "3 min",
       preparation: ["1. Mélanger le tout, sans battre, jusqu'à disparition des grumeaux.", <br />, <br />, "2. Laisser reposer et s'épaissir la pâte pendant 1-2 minutes.", <br />, <br />, "3. Faire chauffer une poêle à feu moyen doux (ou plaque électrique à 190°C).", <br />, <br />, "4. Verser doucement la pâte dans la poêle chaude légèrement graissée pour former un pancake.", <br />, <br />, "5. Faire cuire 1 minute 30 environ de chaque côté (retourner lorsque des bulles se forment et que la face prend une couleur marron-dorée)."],
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
                            <Flip top>
                                <div className="image">
                                    <img src={requireImage(desserts[this.props.match.params.id].image)} className="tailleImage" alt={this.props.match.params.titre}/>
                                </div>
                            </Flip>
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