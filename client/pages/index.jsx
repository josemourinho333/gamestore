import { GameCard } from "../components/GameCard";
import axios from "axios";
import { useEffect, useState } from "react";


//Example Data
const games = [
  //Template
  // {
  //   name: '',
  //   image:'',
  //   price:'',
  //   genres: [],
  //   isSale: true,
  // },
  {
    name: 'Lost Ark',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg?t=1666630324',
    price: 'Free',
    genres: ['MMORPG'],
    isSale: false,
  },
  {
    name: 'Cyberpunk 2077',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1663663573',
    price: '$79.99',
    genres: ['Cyberpunk', 'Open World', 'RPG', 'Nudity'],
    isSale: true,
  },
  {
    name: 'Plateup!',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1599600/header_alt_assets_1.jpg?t=1666703697',
    price: '$20.49',
    genres: ['Co-op', 'Management', 'Roguelite'],
    isSale: true,
  },
  {
    name: 'Rimworld',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg?t=1666905455',
    price: '$39.99',
    genres: ['Colony Sim', 'Base Building', 'Survival', 'Strategy'],
    isSale: true,
  },
];

export default function Home() {

  const [gamers, setGamers] = useState([])

  const getVideoGames = (storeID) => {


    const url = storeID ? `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}` : 'https://www.cheapshark.com/api/1.0/deals'

    const configCheapshark = {
      method: 'get',
      url,
      headers: { }
    };
    
    axios(configCheapshark)
    .then(function (response) {
      // console.log(response.data)
      setGamers(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  useEffect(()=>{
    getVideoGames();

  },[])



 







  return (
    <>
      <div className="font-bold">
        Edit main element in layout.jsx to configure width/padding of the section (minus navbar and footer) or just switch fragment in layout to a div then add if you want to configure whole page including those two.
      </div>

      <div id="hot-deals" className="flex justify-center font-bold">
        HOT DEALS
      </div>
      {/* AREA FOR HOT DEALS */}
      <div className="carousel w-full">
        {gamers.map((game, index) => {
          return (
            <div id={`slide${index}`} key={index} className="carousel-item flex justify-center relative w-full">
              <GameCard
                name={game.title}
                image={game.thumb}
                genres={[]}
                price={game.salePrice}
                isSale={game.isOnSale}
              />
              {/* HAVE TO IMPLEMENT WAY TO ONLY SHOW THIS ON DESKTOP VIEW */}
              <div className="absolute flex justify-center space-x-96 transform -translate-y-1/2 left-5 right-5 top-1/2">
                {index === 0 ?
                  <a href={`#slide${gamers.length - 1}`} className="btn btn-circle">❮</a> :
                  <a href={`#slide${index - 1}`} className="btn btn-circle">❮</a>
                }
                {index === gamers.length - 1 ?
                  <a href="#slide0" className="btn btn-circle">❯</a> :
                  <a href={`#slide${index + 1}`} className="btn btn-circle">❯</a>
                }
              </div>
            </div>

          );
        })}
      </div>


      {/* Saved for now. Shows all gards in a given array */}

      <div className="text-3xl flex flex-col flex-wrap align-center lg:flex-row justify-center">
        {gamers.map( (game, index) => {
          return (
          <GameCard
          key={index}
          name={game.title}
          image={game.thumb}
          genres={[]}
          price={game.salePrice}
          isSale={game.isOnSale}
          />
          )
        })}
      </div>
    </>
  );
}
