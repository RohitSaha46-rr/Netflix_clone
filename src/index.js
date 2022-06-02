import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Tv_shows from './Tv_shows';
import Movies from './Movies';
import Trending from './Trending';
import My_list from './My_list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>}></Route>
  <Route path="/tvshows" element={<Tv_shows/>}></Route>
  <Route path='/movies' element={<Movies/>}></Route>
  <Route path='/trending' element={<Trending/>}></Route>
  <Route path='/my_list' element={<My_list/>}></Route>
  </Routes>
  </BrowserRouter>
);


