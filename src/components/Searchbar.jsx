import react, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Searchbar() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    async function fetchAPI(value) {
        try {
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + value);
            if(resp.ok) {
                const d = await resp.json();
                setData(d);
                return d;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async function handleClick() {
        const search = document.getElementById("pokeSearch");

        if(search.value.length > 0) {
            let api = await fetchAPI(search.value);
            if(api == null) {
                alert("Pokemon konnte nicht gefunden werden");
                return;
            }
            navigate("/pokemon/" + search.value + "?value=" + search.value)

        } else {
            alert("Du musst einen Namen oder eine ID eingeben!")
        }
    }

    return(
        <div className="input-group dropdown">
            <input type="search" id="pokeSearch" className="form-control rounded" placeholder="Pokemonname oder ID" aria-label="Search" aria-describedby="search-addon"/>
            <button type="button" className="btn btn-outline-primary " onClick={handleClick}>Suchen</button>
        </div>
    )

}

export default Searchbar;