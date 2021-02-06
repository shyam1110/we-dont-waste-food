import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './screens/Home'
import Donate from './screens/Donate'
import ReqForFood from './screens/ReqForFood'
import Contributors from './screens/Contributors'
import Contact from './screens/Contact'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Signup from './screens/Signup';
import Login from './screens/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/donate">
                    <Donate />
                </Route>
                <Route path="/reqforfood">
                    <ReqForFood />
                </Route>
                <Route path="/contributors">
                    <Contributors />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
