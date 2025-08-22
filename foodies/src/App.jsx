import React from 'react';
import Menubar from './components/Menubar/Menubar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ExploreFood from './pages/ExploreFood/ExploreFood';
import FoodDetails from './pages/FoodDetails/FoodDetails';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';




const App = () => {
  return (
    <div>
      <Menubar/>
      <ToastContainer/>
        <Routes>
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = '/contact' element = {<Contact/>}></Route>
          <Route path = '/explore' element = {<ExploreFood/>}></Route>
          <Route path = '/food/:id' element = {<FoodDetails/>}></Route>
          <Route path = '/cart' element = {<Cart/>}></Route>
          <Route path = '/order' element = {<PlaceOrder/>}></Route>
          <Route path = '/login' element = {<Login/>}></Route>
          <Route path = '/register' element = {<Register/>}></Route>
        </Routes>
    </div>
    
  )
}

export default App;