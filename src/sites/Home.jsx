import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';


function Home(){
    
    const [data, setData] = useState([]);

    async function fetchApi(startIndex, endIndex) {
        const fetchedData = [];
    
        for (let i = startIndex; i < endIndex; i++) {
          try {
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
            if (resp.ok) {
              const d = await resp.json();
              fetchedData.push(d);
            }
          } catch (error) {
            console.error("Fehler", error);
          }
        }
        return fetchedData;
      }


    async function handleClick() {
        const l = data.length;
        const startIndex = l + 1;
        const endIndex = l + 21;
    
        const fetchedData = await fetchApi(startIndex, endIndex);
    
        const updatedData = [...data, ...fetchedData];
        setData(updatedData);
      }

      useEffect(() => {
        fetchApi(1, 20).then((initialData) => {
          setData(initialData);
        });
      }, []);

        return (

            <div className="container-md">
                <div className="row">
                    {data.map((i, index) => (
                        <div key={index} className="col-md-3 mt-3" id='pokeRow'>
                            <PokemonCard pokemon_name={data[index].name} id={(index + 1)} img={data[index].sprites.front_default} type={"pokemonType" + data[index].types[0].type.name}/>
                        </div>
                    ))}
                    <button className='d-flex justify-content-center btn btn-primary mt-5' onClick={handleClick}>Mehr laden</button>
                </div>
            </div>
        );
}
 
export default Home;