import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/Layout/NavBar'
import ProductList from './Components/Pages/ProductList'
import Details from './Components/Pages/Details'
import Cart from './Components/Cart'
import Error from './Components/Pages/Error'
import Modal from './Components/Pages/Modal'
import SearchList from './Components/Search/SearchList'





class App extends Component {
  render() {
    return (
      <React.Fragment>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={ProductList}/>
            <Route exact path='/details' component={Details}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/search' component={SearchList}/>
           
            <Route component={Error}/>
          </Switch>
            <Modal/>
      </React.Fragment>
    )
  }
}
export default App;