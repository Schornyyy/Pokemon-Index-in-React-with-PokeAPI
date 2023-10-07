import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokemonPage from '../sites/PokemonPage';


function PokemonCard(props) {
    return(
        <div className={props.type + " card"}>
                <img src={props.img} alt={props.img} className='card-img-top'/>
                <div className="card-body">
                    <h5 className="card-title">
                        {props.pokemon_name}
                    </h5>
                    <Link to={"/pokemon/" + props.id + "?value=" + props.id} className='btn btn-primary justify-content-center'>Pokemon ansehen</Link>
                </div>
            </div>
    );
}

export default PokemonCard;