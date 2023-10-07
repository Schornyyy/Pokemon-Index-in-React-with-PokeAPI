import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './sites/Home';
import Navbar from './components/Navbar';
import PokemonPage from './sites/PokemonPage';
import PokemonCard from './components/PokemonCard';

const App = (props) => {
    return (
        <Router>
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/pokemon/:value' element={<PokemonPage/>}/>
            </Routes>
        </Router>
    );
}
 
export default App;