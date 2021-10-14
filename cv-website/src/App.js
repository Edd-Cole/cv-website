import './App.css';
import "./components/website-styles.css"
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {Route, Switch} from "react-router-dom";
import Home from './components/Home';
import CV from "./components/CV";
import Projects from './components/Projects';
import Interests from './components/Interests';
import Blog from './components/Blog';
import Contact from './components/Contact';
import PublicSpeaking from './components/sub-components/PublicSpeaking';
import Music from './components/sub-components/Music';
import Gym from './components/sub-components/Gym';
import Chess from './components/sub-components/Chess';
import Reading from './components/sub-components/Reading';
import Travelling from './components/sub-components/Travelling';
import Backend from './components/sub-components/Backend';
import Frontend from './components/sub-components/Frontend';
import Fullstack from './components/sub-components/Fullstack';
import Java from './components/sub-components/Java';

function App() {
  return (
    <section className="container">
        <Header />
        <Navigation />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/cv">
                <CV />
            </Route>
            <Route exact path="/projects/front_end">
                <Frontend />
            </Route>
            <Route exact path="/projects/back_end">
                <Backend />
            </Route>
            <Route exact path="/projects/full_stack">
                <Fullstack />
            </Route>
            <Route exact path="/projects/java_projects">
                <Java />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/interests/public_speaking">
                <PublicSpeaking />
            </Route>
            <Route exact path="/interests/music">
                <Music />
            </Route>
            <Route exact path="/interests/gym">
                <Gym />
            </Route>
            <Route exact path="/interests/chess">
                <Chess />
            </Route>
            <Route exact path="/interests/reading">
                <Reading />
            </Route>
            <Route exact path="/interests/travelling">
                <Travelling />
            </Route>
            <Route exact path="/interests">
                <Interests />
            </Route>
            <Route exact path="/blog">
                <Blog />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
        </Switch>
        <Footer />
    </section>
  );
}

export default App;
