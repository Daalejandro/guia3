import React,{useState,useEffect} from 'react';

const PokemoneApi=()=>{

    const[pokemones, setPokemones]=useState([]);

    useEffect(()=>{
        async function obtenerPokemones(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const data= await response.json();

        setPokemones(data.results);
        
        }
        obtenerPokemones();
    }, [])

    return(
        <div>
        <h1>
            Lista de Pokemones desde una Api
        </h1>
        <ul>
            {pokemones.map((pokemon,index)=>{
                return <li key={index}>{pokemon.name}</li>
            })}
        </ul>
    </div>
    )
}

export default PokemoneApi