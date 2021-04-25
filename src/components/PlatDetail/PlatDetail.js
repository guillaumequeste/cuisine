import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Detail.css'
import Flip from 'react-reveal/Flip'


const plats = {
    700: { 
        titre: "Gâteau de pommes de terre",
        nbPersonnes: "2",
        ingredients: ["- pommes de terre", <br />, "- 2 oeufs", <br />, "- 3 cuillères à soupe de crème fraîche", <br />, "- beurre", <br />, "- huile de tournesol"],
        tempsTotal: "40 min",
        tempsPreparation: "20 min",
        tempsCuisson: "20 min",
        preparation: ["1. Râper les pommes de terre.", <br />, <br />, "2. Bien les essorer.", <br />, <br />, "3. Les mettre dans un grand plat et rajouter les oeufs et la crème épaisse.", <br />, <br />, "4. Beurrer la poêle et mettre l'huile de tournesol.", <br />, <br />, "5. Etaler les pommes de terre afin de former un gâteau.", <br />, <br />, "6. Laisser cuire afin que le dessous du gâteau soit légèrement doré.", <br />, <br />, "7. Mettre une grande assiette sur la poêle et retourner le tout.", <br />, <br />, "8. Beurrer la poêle et mettre l'huile de tournesol.", <br />, <br />, "9. Cuire l'autre côté afin que le dessous du gâteau soit légèrement doré."],
        image: "gateau_pommes_de_terre.jpg",
      },
    780: { 
        titre: "Gâteau savoyard",
        nbPersonnes: "2",
        ingredients: ["- crêpes", <br />, <br />, "Béchamel soubisée :", <br />, "- 25g de farine", <br />, "- 40g de beurre", <br />, "- 2 dL de lait", <br />, "- 125g de gruyère râpé", <br />, "- 1 pincée de sel fin", <br />, "- 1 pincée de noix de muscade râpée", <br />, "- 100g d'oignons", <br />, <br />, "Garniture :", <br />, "- 2 dL de crème fraîche", <br />, "- 20g d'ail", <br />, "- 30g d'échalotes", <br />, "- 800g de pommes de terre", <br />, "- 25g de persil", <br />, "- 25g de ciboulette", <br />, "- 2 pincées de sel fin", <br />, "- 1 tour moulin à poivre", <br />, "- 30g de beurre"],
        tempsTotal: "40 min",
        tempsPreparation: "20 min",
        tempsCuisson: "20 min",
    preparation: ["1. Cuire les crêpes et les réserver au chaud.", <br />, <br />, "2. Faire cuire les pommes de terre en robe des champs.", <br />, <br />, "3. Eplucher les oignons, les ciseler finement puis les faire fondre doucement (sans coloration) dans 15g de beurre.", <br />, <br />, "4. Préparer la béchamel, faire fondre 25g de beurre, y délayer la farine, verser le lait, porter à ébullition et maintenir 2 à 3 minutes en tournant.", <br />, <br />, "5. Ajouter le gruyère râpé, puis assaisonner de sel et de noix de muscade.", <br />, <br />, "6. Verser sur les oignons, mélanger puis réserver au chaud.", <br />, <br />, "7. Eplucher les pommes de terre, les couper en tranches.", <br />, <br />, "8. Ciseler l'ail, l'échalote, hacher le persil et la ciboulette.", <br />, <br />, "9. Faire fondre le beurre dans une poêle, y faire sauter les pommes de terre jusqu'à obtention d'un léger blondissement.", <br />, <br />, "10. Ajouter sel, poivre, échalote, ail, persil, ciboulette.", <br />, <br />, "11. Beurrer un moule, recouvrir le fond et le tour de crêpes, les recouvrir avec les 3/4 de béchamel soubisée puis remplir le moule avec les pommes de terre en tassant et en ayant soin, au fur et à mesure du remplissage, de répartir la crème fraîche sur les pommes de terre.", <br />, <br />, "12. Couvrir le moule avec les crêpes restantes.", <br />, <br />, "13. Mettre à four chaud (220°C) pendant 25 minutes environ", <br />, <br />, "13. Démouler au moment de servir, napper avec le reste de béchamel soubisée, remettre 2 à 3 minutes à four très chaud. Servir aussitôt."],
        image: "gateau_pommes_de_terre.jpg",
      },
   1600: { 
      titre: "Pâtes à la carbonara",
      nbPersonnes: "2",
      ingredients: ["- 250g de pâtes", <br />, "- 25 cl de crème fraîche", <br />, "- 2 jaunes d'oeuf", <br />, "- 1 pincée de sel", <br />, "- poivre", <br />, "- 125g de lardons", <br />, "- 1/2 oignon"],
      tempsTotal: "20 min",
      tempsPreparation: "10 min",
      tempsCuisson: "10 min",
      preparation: ["1. Cuire les pâtes dans un grand volume d'eau bouillante salée.", <br />, <br />, "2. Emincer les oignons et les faire revenir à la poêle. Dès qu'ils sont bien dorés, y ajouter les lardons.", <br />, <br />, "3. Préparer dans un saladier la crème fraîche, les oeufs, le sel, le poivre et mélanger.", <br />, <br />, "4. Retirer les latrdons du feu dès qu'ils sont dorés et les ajouter à la crème.", <br />, <br />, "5. Une fois les pâtes cuites al dente, les égoutter et y incorporer la crème. Remettre sur le feu si le plat a refroidi.", <br />, <br />, "6. Servir."],
      image: "pates_carbonara.jpg",
    },
    1650: { 
        titre: "Pizza",
        nbPersonnes: "4",
        ingredients: ["Pâte :", <br />, "- 60g de farine de blé complète T150", <br />, "- 50g de fromage blanc 0% (fonctionne aussi avec du yaourt)", <br />, "- 10mL d'eau", <br />, "- 2 cuillères à café de levure chimique", <br />, "- Optionnel : herbes, épices dans votre pâte", <br />, <br />, "Au choix :", <br />, "- purée ou coulis de tomates", <br />, "- oignons frits", <br />,"- gruyère", <br />, "- crème fraîche", <br />, "- lardons", <br />, "- oeuf coupé en lamelles"],
        tempsTotal: "25 min",
        tempsPreparation: "12 min",
        tempsCuisson: "13 min",
        preparation: ["1. Mélanger la farine, le fromage blanc, l'eau et la levure afin d'obtenir une pâte qui permette de faire une boule (si besoin rajouter de la farine).", <br />, <br />, "2. Etaler la pâte, badigeonner avec la purée ou le coulis de tomates, déposer les oignons frits, le gruyère, la crème fraîche et les lardons.", <br />, <br />, "3. Faire cuire 13 minutes à 210°C."],
        image: "pizza.jpg",
      },
    1680: { 
        titre: "Poulet katsu - sauce tonkatsu",
        nbPersonnes: "2",
        ingredients: ["Sauce tonkatsu :", <br />, "- 2 cuillères à soupe de worcestershire", <br />, "2 cuillères à soupe de ketchup", <br />, "1 cuillère à soupe de sauce d'huître", <br />, "1 cuillère à café de sucre", <br />, <br />, "Poule katsu :", <br />, "- 2 blancs de poulet", <br />, "- sel", <br />, "- poivre", <br />, "- 1 cuillère à soupe d'ail en poudre", <br />, "- 2 cuillères à soupe de farine", <br />, "- 1 oeuf battu", <br />, "- 100g de chapelure japonaise ou panko", <br />, "- huile végétale pour la cuisson"],
        tempsTotal: "32 min",
        tempsPreparation: "20 min",
        tempsCuisson: "12 min",
        preparation: ["1. Dans un bol, préparer la sauce tonkatsu. Rien de plus simple, mélanger tous les ingrédients ensemble et réserver au frais.", <br />, <br />, "2. Rincer les blancs de poulet, sécher sur du papier absorbant. Assaisonner le poulet de sel, de poivre et d'ail en poudre.", <br />, <br />, "3. Préparer dans des assiettes creuses, la farine d'un côté, la chapelure dans l'autre et enfin l'oeuf battu. Chauffer une poêle avec de l'huile, assez pour frire. Tremper d'abord le blanc dans la farine, puis dans l'oeuf battu, finir par la chapelure. Une fois que le blanc de poulet est bien recouvert, disposez-le dans la poêle.", <br />, <br />, "4. Laisser cuire sur chaque face environ 5-7 minutes. Une fois que le poulet katsu est cuit, le couper en fines lamelles. Disposer sur une assiette et verser par dessus la sauce tonkatsu."],
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