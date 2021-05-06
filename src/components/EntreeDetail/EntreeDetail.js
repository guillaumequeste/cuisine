import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Detail.css'
import Flip from 'react-reveal/Flip'


const entrees = {
    700: { 
        titre: "Gâteau de crêpes",
        nbPersonnes: "4",
        ingredients: ["- crêpes", <br />, "- mayonnaise", <br />, "- tomates", <br />, "- thon", <br />, "- crabe", <br />, "- truite fumée", <br />, "- saumon"],
        tempsTotal: "20 min",
        tempsPreparation: "20 min",
        tempsCuisson: "-",
        preparation: ["1. Dans un grand plat, déposer une crêpe et mettre du thon et de la mayonnaise.", <br />, <br />, "2. Déposer une crêpe et mettre du crabe et de la mayonnaise.", <br />, <br />, "3. Déposer une crêpe et mettre de la truite fumée.", <br />, <br />, "4. Déposer une crêpe et mettre du saumon", <br />, <br />, "5. Déposer une crêpe et mettre des morceaux de tomates et du thon.", <br />, <br />, "6. Déposer une crêpe afin de recouvrir le gâteau."],
        image: "gateau_crepes.jpg",
      },
    780: { 
       titre: "Guacamole",
       nbPersonnes: "4",
       ingredients: ["- 4 avocats", <br />, "- 1 sachet mélange d'épices pour guacamole"],
       tempsTotal: "5 min",
       tempsPreparation: "5 min",
       tempsCuisson: "-",
       preparation: ["1. Enlever la peau des avocats et le noyau.", <br />, <br />, "2. Ecraser les avocats à l'aide d'une fourchette.", <br />, <br />, "3. Dans un plat, mélanger l'avocat et le mélange d'épices.", <br />, <br />, "4. Mettre au frais."],
       image: "guacamole.jpg",
     },
     1300: { 
        titre: "Mayonnaise maison",
        nbPersonnes: "4",
        ingredients: ["- 2 jaunes d'oeufs", <br />, "- 1 cuillère à soupe de moutarde", <br />, "- sel", <br />, "- poivre", <br />, "- huile", <br />, "- vinaigre"],
        tempsTotal: "15 min",
        tempsPreparation: "15 min",
        tempsCuisson: "-",
        preparation: ["1. Dans un saladier, mettre les jaunes d'oeufs, la moutarde, le sel, le poivre et commencer à mixer.", <br />, <br />, "2. Tout en mixant, ajouter un filet d'huile", <br />, <br />, "3. Puis ajouter un filet de vinaigre.", <br />, <br />, "4. Ajouter de nouveau un filet d'huile de façon à obtenir une mayonnaise consistante."],
        image: "mayonnaise.jpg",
      },
      1500: { 
        titre: "Oeufs au saumon",
        nbPersonnes: "4",
        ingredients: ["- 6 oeufs durs", <br />, "- 1 boîte de saumon", <br />, "- mayonnaise maison", <br />, "- sel", <br />, "- poivre"],
        tempsTotal: "15 min",
        tempsPreparation: "15 min",
        tempsCuisson: "-",
        preparation: ["1. La veille, dans une casserole, placer 6 oeufs, recouvrir d'eau froide, faire chauffer et laisser 10 minutes à ébullition de façon à obtenir 6 oeufs durs.", <br />, <br />, "2. Enlever les coquilles.", <br />, <br />, "3. Couper les oeufs en 2.", <br />, <br />, "4. Enlever les jaunes et les mettre de côté.", <br />, <br />, "5. Mettre de côté également les 2 1/2 blancs les moins appétissants.", <br />, <br />, "6. Ecraser les jaunes (et les 2 1/2 blancs) avec une fourchette.", <br />, <br />, "7. Emietter le saumon, ajouter la mayonnaise, le sel et le poivre et mélanger.", <br />, <br />, "8. Remplir les blancs."],
        image: "oeufs_saumon.jpg",
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
                    <div className="part1">
                        <div className="part1a">
                            <div className="titreRecette">
                                {entrees[this.props.match.params.id].titre}
                            </div>
                            <Flip top>
                                <div className="image">
                                    <img src={requireImage(entrees[this.props.match.params.id].image)} className="tailleImage" alt={this.props.match.params.titre}/>
                                </div>
                            </Flip>
                        </div>
                        <div className="part1b">
                            <ul>
                                <li className="liCard"><strong>Nombre de personnes : </strong>{entrees[this.props.match.params.id].nbPersonnes}</li>
                                <li className="liCard"><strong>Temps total : </strong>{entrees[this.props.match.params.id].tempsTotal}</li>
                                    <ul>
                                        <li className="liCard2"><strong>Temps de préparation : </strong>{entrees[this.props.match.params.id].tempsPreparation}</li>
                                        <li className="liCard2"><strong>Temps de cuisson : </strong>{entrees[this.props.match.params.id].tempsCuisson}</li>
                                    </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="part2">
                        <li className="liCard"><strong>Ingrédients :</strong></li>
                        <li className="liCard3">{entrees[this.props.match.params.id].ingredients}</li>
                        <li className="liCard"><strong>Préparation : </strong></li>
                        <li className="liCard3">{entrees[this.props.match.params.id].preparation}</li>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default EntreeDetail