import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Component/Signin';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Signup, { SIgnup } from './Component/SIgnup';
import Header from './Component/Header';
import Home from './Component/Home';
import Gallery from './Component/Gallery';
import Donate from './Component/Donation/Donate';
import Contact from './Component/Contact';
import $ from 'jquery';
import Pages from './Component/Pages';
// window.$ = $; // Ensure jQuery is available globally
import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import '@fancyapps/fancybox';
import Notification from './Component/Notification';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route  path='/' element = {<Home/>}/>
    <Route path='signin' element = {<Signin/>}/>
    <Route  path='signup' element = {<Signup/>}/>
    <Route  path='gallery' element = {<Gallery/>}/>
    <Route  path='donate' element = {<Donate/>}/>
    <Route  path='contact' element = {<Contact/>}/>
    <Route  path='pages' element = {<Pages/>}/>
  </Routes>
  </BrowserRouter>
  <Notification/>
  </>
  );
}

export default App;
