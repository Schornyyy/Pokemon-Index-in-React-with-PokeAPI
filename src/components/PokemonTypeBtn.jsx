import React from 'react'


function PokemonTypeBtn(props) {

    const types = props.type

    return(
        <button className={"pokemonType" + types + ' btn w-100'}> {props.name} </button>
    );

}

export default PokemonTypeBtn;