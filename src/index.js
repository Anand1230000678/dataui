import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Country from './pages/Country';
import State from './pages/State';
import District from './pages/District';

import Instagram from './pages/Instagram';
import InstagramLogIn from './pages/InstagramLogIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element = {<Home/>}/>
    <Route path='country' element = {<Country/>}/>
    <Route path='state' element = {<State/>}/>
    <Route path='district' element = {<District/>}/>
    <Route path='insta' element = {<Instagram/>}/>
    <Route path='instalog' element = {<InstagramLogIn/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
);



reportWebVitals();
