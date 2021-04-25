import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Detail.css'
import Flip from 'react-reveal/Flip'


const desserts = {
    300: { 
        titre: "Caramel",
        nbPersonnes: "2",
        ingredients: ["- 125 de sucre", <br />, "- 3 cuillères à soupe d'eau", <br />, "- 10cL de crème liquide", <br />, "- 25g de beurre salé"],
        tempsTotal: "5 min",
        tempsPreparation: "5 min",
        tempsCuisson: "-",
        preparation: ["1. Dans une casserole, mettre le sucre et l'eau. Chauffer jusqu'à obtention d'un caramel.", <br />, <br />, "2. Hors du feu, rajouter la crème bouillante.", <br />, <br />, "3. Remuer, mettre sur feu doux et mettre le beurre.", <br />, <br />, "4. Quand le caramel est lié, cessez de remuer."],
        image: "caramel.jpg",
      },
    380: { 
        titre: "Crêpes",
        nbPersonnes: "4",
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
     },
     2000: { 
        titre: "Tarte aux pommes",
        nbPersonnes: "4",
        ingredients: ["- 300g de pâte sablée", <br />, "- 4 pommes Chantecler", <br />, "- 50g de beurre", <br />, "- 60g de sucre vergeoise"],
        tempsTotal: "55 min",
        tempsPreparation: "15 min",
        tempsCuisson: "entre 30 et 40 min",
        preparation: ["1. Etaler 300g de pâte sablée", <br />, <br />, "2. Peler 4 pommes Chantecler, les tailler en 2 moitiés, les évider puis tailler chaque moitié en 4 ou 6 quartiers.", <br />, <br />, "3. Déposer 'anarchiquement' les morceaux de pommes sur la pâte en partant du milieu vers les bords et en prenant soin de laisser 3 bons centimètres de pâte au niveau du bord.", <br />, <br />, "4. Replier alors ces 3 centimètres de bord sur les pommes.", <br />, <br />, "5. Répartir 50g de beurre taillé en copeaux sur les pommes.", <br />, <br />, "6. Saupoudrer de 30g de sucre vergeoise.", <br />, <br />, "7. Mettre au four préchauffé à 200°C.", <br />, <br />, "8. Laisser cuire entre 30 et 40 minutes.", <br />, <br />, "9. En milieu de cuisson, saupoudrer à nouveau de 30g de sucre."],
        image: "",
      },
      2500: { 
        titre: "Tarte Tatin",
        nbPersonnes: "4",
        ingredients: ["- pâte brisée", <br />, "- pommes", <br />, "- 130g de sucre", <br />, "- 80g de beurre"],
        tempsTotal: "2h20 min",
        tempsPreparation: "20 min",
        tempsCuisson: "2h",
        preparation: ["1. Couper les pommes en quartiers.", <br />, <br />, "2. Saupoudrer le fond de la sauteuse avec le sucre.", <br />, <br />, "3. Disposer des morceaux de beurre u peu partout.", <br />, <br />, "4. Mettre les pommes en forme de rosace.", <br />, <br />, "5. Ajouter le complément de pommes.", <br />, <br />, "6. Bien tasser les pommes afin que, lorsque l'on va démouler la tarte, elle ne s'ouvre pas.", <br />, <br />, "7. Aplatir la pâte brisée à l'aide d'un rouleau.", <br />, <br />, "8. Enrouler la pâte brisée autour du rouleau et la déposer sur les pommes.", <br />, <br />, "9. Rabattre légèrement les bords de la pâte sur le côté.", <br />, <br />, "10. Cuire 2h à 200°C.", <br />, <br />, "11. Passer rapidement sur le feu pour terminer la caramélisation.", <br />, <br />, "12. Retourner la tarte avec une assiette."],
        image: "",
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