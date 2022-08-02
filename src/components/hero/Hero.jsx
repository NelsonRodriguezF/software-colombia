
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Hero = () => {

  let { id } = useParams();

  const [ apiHeroe, setApiHeroe ] = useState([]);

  useEffect(() => {
      async function traerHeroe(){
          const url =`https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/hero?id=${id}`;
          const respond = await fetch(url);
          const data = await respond.json();
          console.log(data);
          setApiHeroe(data);
      }

      traerHeroe({apiHeroe});
  },[]);

  console.log('%c datos de heroe ', 'color:blue', apiHeroe);

    return (
        <main>
            <h2>Héroe:{apiHeroe.id}</h2>

            <div className="container">
                <div className="hero">
                    <h3>{ apiHeroe.name} </h3>
                    {/* <img src={ apiHeroe.images.md} alt={apiHeroe.name} /> */}
                    <div className="caracteristicas">
                        <h4>Caracteristicas</h4>
                        {/* <p> Gender: { apiHeroe.appearance.gender} </p> */}
                        {/* <p> Aliases: { apiHeroe.biography.aliases[0]} </p> */}
                        {/* <p> Alignment: { apiHeroe.biography.alignment} </p> */}
                        <br />
                        <hr />
                        <div className="powerstats">
                            <h5>Powerstats:</h5>
                            {/* <p>combat: { apiHeroe.powerstats.combat}</p>
                            <p>durability: { apiHeroe.powerstats.durability}</p>
                            <p>intelligence: { apiHeroe.powerstats.intelligence}</p>
                            <p>power: { apiHeroe.powerstats.power}</p>
                            <p>speed: { apiHeroe.powerstats.speed}</p>
                            <p>strength: { apiHeroe.powerstats.strength}</p> */}
                        </div>
                    </div>
                    <button>
                        <Link className="link" to={`/`}>
                          Volver
                        </Link>  
                    </button>
                                     
                </div>
            </div>
        </main>    
    )
}