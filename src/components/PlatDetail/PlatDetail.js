import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Detail.css'
import Flip from 'react-reveal/Flip'


const plats = {
   1600: { 
      titre: "Pâtes à la carbonara",
      nbPersonnes: "2",
      ingredients: "250g de pâtes, 25 cl de crème fraîche, 2 jaunes d'oeuf, 1 pincée de sel, poivre, 125g de lardons, 1/2 oignon",
      tempsTotal: "20 min",
      tempsPreparation: "10 min",
      tempsCuisson: "10 min",
      preparation: "1. Cuire les pâtes dans un grand volume d'eau bouillante salée. \n 2. Emincer les oignons et les faire revenir à la poêle. Dès qu'ils ont bien dorés, y ajouter les lardons. \n 3. Préparer dans un saladier la crème fraîche, les oeufs, le sel, le poivre et mélanger. \n 4. Retirer les latrdons du feu dès qu'ils sont dorés et les ajouter à la crème. \n 5. Une fois les pâtes cuites al dente, les égoutter et y incorporer la crème. Remettre sur le feu si le plat a refroidi. \n 6. Servir.",
      image: "pates_carbonara.jpg",
    },
    1650: { 
        titre: "Poulet katsu - sauce tonkatsu",
        nbPersonnes: "2",
        ingredients: "Sauce tonkatsu : 2 cuillères à soupe de worcestershire, 2 cuillères à soupe de ketchup, 1 cuillère à soupe de sauce d'huître, 1 cuillère à café de sucre. Poule katsu : 2 blancs de poulet, sel, poivre, 1 cuillère à soupe d'ail en poudre, 2 cuillères à soupe de farine, 1 oeuf battu, 1ààg de chapelure japonaise ou panko, huile végétale pour la cuisson",
        tempsTotal: "32 min",
        tempsPreparation: "20 min",
        tempsCuisson: "12 min",
        preparation: "1. Dans un bol, préparer la sauce tonkatsu. Rien de plus simple, mélanger tous les ingrédients ensemble et réserver au frais. \n 2. Rincer les blancs de poulet, sécher sur du papier absorbant. Assaisonner le poulet de sel, de poivre et d'ail en poudre. \n 3. Préparer dans des assiettes creuses, la farine d'un côté, la chapelure dans l'autre et enfin l'oeuf battu. Chauffer une poêle avec de l'huile, assez pour frire. Tremper d'abord le blanc dans la farine, puis dans l'oeuf battu, finir par la chapelure. Une fois que le blanc de poulet est bien recouvert, disposez-le dans la poêle. \n 4. Laisser cuire sur chaque face environ 5-7 minutes. Une fois que le poulet katsu est cuit, le couper en fines lamelles. Disposer sur une assiette et verser par dessus la sauce tonkatsu.",
        image: "poulet_katsu.jpeg",
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
                    <div className="part1">
                        <div className="part1a">
                            <div className="titreRecette">
                                {plats[this.props.match.params.id].titre}
                            </div>
                            <Flip top>
                                <div className="image">
                                    <img src={requireImage(plats[this.props.match.params.id].image)} className="tailleImage" alt={this.props.match.params.titre}/>
                                </div>
                            </Flip>
                        </div>
                        <div className="part1b">
                            <ul>
                                <li className="liCard"><strong>Nombre de personnes : </strong>{plats[this.props.match.params.id].nbPersonnes}</li>
                                <li className="liCard"><strong>Temps total : </strong>{plats[this.props.match.params.id].tempsTotal}</li>
                                    <ul>
                                        <li className="liCard2"><strong>Temps de préparation : </strong>{plats[this.props.match.params.id].tempsPreparation}</li>
                                        <li className="liCard2"><strong>Temps de cuisson : </strong>{plats[this.props.match.params.id].tempsCuisson}</li>
                                    </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="part2">
                        <li className="liCard"><strong>Ingrédients :</strong></li>
                        <li className="liCard3">{plats[this.props.match.params.id].ingredients}</li>
                        <li className="liCard"><strong>Préparation : </strong></li>
                        <li className="liCard3">{plats[this.props.match.params.id].preparation}</li>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PlatDetail