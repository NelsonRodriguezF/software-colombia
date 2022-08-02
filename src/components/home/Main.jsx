import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const Main = () => {

    const [ apiHeroes, setApiHeroes ] = useState([]);

    useEffect(() => {
        async function traerHeroes(){
            const url ="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes?size=20";
            const respond = await fetch(url);
            const data = await respond.json();
            setApiHeroes(data.items);
        }

        traerHeroes();
    },[]);

    console.log({apiHeroes});

    return (
        <main>
            <h2>Héroes</h2>

            <div className="container">
                <div className="heroe">
                    
                    { !apiHeroes ? "Cargando..." : apiHeroes.map( (heroe, id) => {
                        return  <li key={id==id}>
                                    <h3>{ heroe.name} </h3>
                                    <img src={ heroe.images.sm} alt={heroe.name} />
                                    <div className="caracteristicas">
                                        <h4>Caracteristicas</h4>
                                        <p> ID: { heroe.id} </p>
                                        <p> Gender: { heroe.appearance.gender} </p>
                                        <p> Aliases: { heroe.biography.aliases[0]} </p>
                                        <p> Alignment: { heroe.biography.alignment} </p>
                                        <br />
                                        <hr />
                                        {/* <div className="powerstats">
                                            <h5>Powerstats:</h5>
                                            <p>combat: { heroe.powerstats.combat}</p>
                                            <p>durability: { heroe.powerstats.durability}</p>
                                            <p>intelligence: { heroe.powerstats.intelligence}</p>
                                            <p>power: { heroe.powerstats.power}</p>
                                            <p>speed: { heroe.powerstats.speed}</p>
                                            <p>strength: { heroe.powerstats.strength}</p>
                                        </div> */}
                                    </div>
                                    <Link className="link" to={`/${heroe.id}`}>
                                        Más...
                                    </Link>
                                </li>
                    }) }
                     
                </div>
            </div>
        </main>    
    )
}