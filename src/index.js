import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Entrees from './components/Entrees/Entrees'
import EntreeDetail from './components/EntreeDetail/EntreeDetail'
import Plats from './components/Plats/Plats'
import PlatDetail from './components/PlatDetail/PlatDetail'
import Desserts from './components/Desserts/Desserts'
import DessertDetail from './components/DessertDetail/DessertDetail'
import Contact from './components/Contact/Contact'
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound'


const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/entrees' component={Entrees}/>
            <Route path='/entree/:id' component={EntreeDetail}/>
            <Route path='/plats' component={Plats}/>
            <Route path='/plat/:id' component={PlatDetail}/>
            <Route path='/desserts' component={Desserts}/>
            <Route path='/dessert/:id' component={DessertDetail}/>
            <Route path='/contact' component={Contact}/>
            <Route path="*" component={ErrorNotFound}/>
        </Switch>
    </Router>
)



ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();