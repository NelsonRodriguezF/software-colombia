
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const HeroImages = () => {

  let { id } = useParams();

  const [ apiHeroe, setApiHeroe ] = useState([]);

  useEffect(() => {
      async function traerHeroe(){
          const url =`https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/hero?id=${id}`;
          const respond = await fetch(url);
          const data = await respond.json();
          // console.log(data);
          setApiHeroe(data.images);
      } 

      traerHeroe(apiHeroe);
  },[]);

  console.log('%c datos de heroe ', 'color:blue', apiHeroe);

    return (
      <>
        
        <img src={ apiHeroe.md} alt={apiHeroe.name} />
                    
      </>
        
    )
}