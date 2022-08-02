
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { PowerHero } from './HeroPower';
import { HeroImages } from './HeroImages';
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";

export const Hero = () => {

  let { id } = useParams();

  const [ apiHeroe, setApiHeroe ] = useState([]);

  useEffect(() => {
      async function traerHeroe(){
          const url =`https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/hero?id=${id}`;
          const respond = await fetch(url);
          const data = await respond.json();
          // console.log(data);
          setApiHeroe(data);
      } 

      traerHeroe(apiHeroe);
  },[]);

  console.log('%c datos de heroe ', 'color:blue', apiHeroe);

    return (
      <>
        <Header></Header>
        <main>
            <h2>Héroe:{apiHeroe.id}</h2>

            <div className="container">
                <div className="hero">
                    <h3>{ apiHeroe.name} </h3>
                    {/* <img src={ apiHeroe.images.md} alt={apiHeroe.name} /> */}
                    <HeroImages></HeroImages>
                    <div className="caracteristicas">
                        <p className="slug"> Slug: { apiHeroe.slug} </p>
                        <hr />
                        <PowerHero></PowerHero>
                    </div>
                    <button>
                        <Link className="link" to={`/`}>
                          Volver
                        </Link>  
                    </button>
                                     
                </div>
            </div>
        </main>
        <Footer></Footer>   
      </>
        
    )
}