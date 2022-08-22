// @ts-nocheck
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './router/home/Home';
import Login from './router/login/Login';
import SinglePage from './router/single-page/SinglePage';
import Cart from './router/cart/Cart';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PrivateRoute from './router/private-route/PrivateRoute';
import Admin from './router/admin/Admin';
import About from './router/about/About';
import Like from './router/like/Like';
import BackToTop from './components/backToTop/BackToTop';
import BottomController from './components/bottom-controller/BottomController';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <BackToTop/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/filter" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/heart" component={Like} />
          <Route path="/product/:id" component={SinglePage}/>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="/about"  component={About}/>
        </Switch>
        <BottomController/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
