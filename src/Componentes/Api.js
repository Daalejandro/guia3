/* eslint-disable no-lone-blocks */
import React from 'react';

export default class Api extends React.Component{

    componentDidMount(){
        let url='https://pokeapi.co/api/v2/pokemon';
        fetch(url).then((res)=>res.json())
        .then((json)=>{
            {json.results.map((el)=>
                console.log(el.name))}
        })
    }
    render(){
        return(
            <div>
                <h1>
                    Lista de Pokemones desde una Api
                </h1>
            </div>
        )
    }
}