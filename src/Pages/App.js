import './App.css';
import Home from '../MainComponents/Home'
import MainLayout from "../MainComponents/MainLayout"
import Projects from "./Projects"
import Resume from "./Resume"
import About from "../MainComponents/About"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div class="App">
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/projects"><Projects /></Route>
            <Route path="/resume"><Resume /></Route>
          </Switch>
        </MainLayout>
      </Router>
    </div>
  )
}

export default App;