// @ts-nocheck
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './router/home/Home';
import Login from './router/login/Login';
import SinglePage from './router/single-page/SinglePage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './router/about/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/product/:id" component={SinglePage}/>
          <Route path="/about"  component={About}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
