
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const PowerHero = () => {

  let { id } = useParams();

  const [ apiHeroe, setApiHeroe ] = useState([]);

  useEffect(() => {
      async function traerHeroe(){
          const url =`https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/hero?id=${id}`;
          const respond = await fetch(url);
          const data = await respond.json();
          // console.log(data);
          setApiHeroe(data.powerstats);
      } 

      traerHeroe(apiHeroe);
  },[]);

  console.log('%c datos de heroe ', 'color:blue', apiHeroe);

    return (
      <>
        <div className="powerstats">
            <h5>Powerstats:</h5>
            <p>combat: { apiHeroe.combat}</p>
            <p>durability: { apiHeroe.durability}</p>
            <p>intelligence: { apiHeroe.intelligence}</p>
            <p>power: { apiHeroe.power}</p>
            <p>speed: { apiHeroe.speed}</p>
            <p>strength: { apiHeroe.strength}</p>
        </div>   
      </>
        
    )
}