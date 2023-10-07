import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PokemonTypeBtn from '../components/PokemonTypeBtn';


function PokemonPage(props) {

    const loc = useLocation();
    const queryParams = new URLSearchParams(loc.search);
    const poke_id = queryParams.get("value");
    const [data, setData] = useState();


    useEffect(() => {
        async function fetchAPi() {
            try {
                const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + poke_id);
                if(resp.ok) {
                    const d = await resp.json();
                    setData(d);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAPi()
    
    }, [queryParams]);

    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    {data? (
                    <img src={data["sprites"].front_default} alt={data["sprites"].front_default} style={{width: '400px'}}/>) : null}
                </div>
                <div className="col-6">
                <div className="row">
                </div>
                    {data? (
                        <><h1>{data.name}</h1><p>PokemonID: {data.id}</p>
                        
                        </>) : null}

                    <div className="row">
                        <h3>Types</h3>
                        {data? (
                            data["types"].map((i, index) => (
                            <div className="col-6" key={index}>
                                <PokemonTypeBtn type={i.type.name} name={i.type.name}/>
                            </div>
                            ))
                        ): null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonPage;