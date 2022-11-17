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

  const [steamGames, setSteamGames] = useState([]) // Store Id 1
  const [humbleGames, setHumbleGames] = useState([]) // Store Id 11
  const [epicGames, setEpicGames] = useState([]) //Store ID 25

  const getVideoGames = (storeID, stateSetter) => {


    const url = storeID ? `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}` : 'https://www.cheapshark.com/api/1.0/deals'

    const configCheapshark = {
      method: 'get',
      url,
      headers: { }
    };
    
    axios(configCheapshark)
    .then(function (response) {
      // console.log(response.data)
      stateSetter(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  useEffect(()=>{
    getVideoGames(1, setSteamGames);
    getVideoGames(11, setHumbleGames);
    getVideoGames(25, setEpicGames);

  },[])



 







  return (
    <>
      {/* <div className="font-bold">
        Edit main element in layout.jsx to configure width/padding of the section (minus navbar and footer) or just switch fragment in layout to a div then add if you want to configure whole page including those two.
      </div> */}

      
      {/* AREA FOR STEAM DEALS */}
      {/* <div id="hot-deals" className="flex text-white justify-center font-bold">
        STEAM DEALS
      </div> */}
  
      <div className="carousel w-full">
        {steamGames.map((game, index) => {
          return (
            <div id={`slideSteam${index}`} key={index} className="carousel-item flex justify-center relative w-full">
              <GameCard
                name={game.title}
                image={game.thumb}
                genres={[]}
                price={game.salePrice}
                isSale={game.isOnSale}
                gameStore={'steam store'}
              />
              {/* HAVE TO IMPLEMENT WAY TO ONLY SHOW THIS ON DESKTOP VIEW */}
              <div className="absolute flex justify-center space-x-96 transform -translate-y-1/2 left-5 right-5 top-1/2">
                {index === 0 ?
                  <a href={`#slideSteam${steamGames.length - 1}`} className="btn btn-circle">❮</a> :
                  <a href={`#slideSteam${index - 1}`} className="btn btn-circle">❮</a>
                }
                {index === steamGames.length - 1 ?
                  <a href="#slideSteam0" className="btn btn-circle">❯</a> :
                  <a href={`#slideSteam${index + 1}`} className="btn btn-circle">❯</a>
                }
              </div>
            </div>

          );
        })}
      </div>

      {/* AREA FOR HUMBLE STORE DEALS */}
      {/* <div id="hot-deals" className="flex justify-center font-bold">
        HUMBLE STORE DEALS
      </div> */}
      <div className="carousel w-full">
        {humbleGames.map((game, index) => {
          return (
            <div id={`slideHumble${index}`} key={index} className="carousel-item flex justify-center relative w-full">
              <GameCard
                name={game.title}
                image={game.thumb}
                genres={[]}
                price={game.salePrice}
                isSale={game.isOnSale}
                gameStore={'humble games store'}
              />
              {/* HAVE TO IMPLEMENT WAY TO ONLY SHOW THIS ON DESKTOP VIEW */}
              <div className="absolute flex justify-center space-x-96 transform -translate-y-1/2 left-5 right-5 top-1/2">
                {index === 0 ?
                  <a href={`#slideHumble${steamGames.length - 1}`} className="btn btn-circle">❮</a> :
                  <a href={`#slideHumble${index - 1}`} className="btn btn-circle">❮</a>
                }
                {index === steamGames.length - 1 ?
                  <a href="#slideHumble0" className="btn btn-circle">❯</a> :
                  <a href={`#slideHumble${index + 1}`} className="btn btn-circle">❯</a>
                }
              </div>
            </div>

          );
        })}
      </div>

      {/* AREA FOR EPIC STORE DEALS */}
      {/* <div id="hot-deals" className="flex justify-center font-bold">
        EPIC GAMES DEALS
      </div> */}
      <div className="carousel w-full">
        {epicGames.map((game, index) => {
          return (
            <div id={`slideEpic${index}`} key={index} className="carousel-item flex justify-center relative w-full">
              <GameCard
                name={game.title}
                image={game.thumb}
                genres={[]}
                price={game.salePrice}
                isSale={game.isOnSale}
                gameStore={'epic games store'}
              />
              {/* HAVE TO IMPLEMENT WAY TO ONLY SHOW THIS ON DESKTOP VIEW */}
              <div className="absolute flex justify-center space-x-96 transform -translate-y-1/2 left-5 right-5 top-1/2">
                {index === 0 ?
                  <a href={`#slideEpic${steamGames.length - 1}`} className="btn btn-circle">❮</a> :
                  <a href={`#slideEpic${index - 1}`} className="btn btn-circle">❮</a>
                }
                {index === steamGames.length - 1 ?
                  <a href="#slideEpic0" className="btn btn-circle">❯</a> :
                  <a href={`#slideEpic${index + 1}`} className="btn btn-circle">❯</a>
                }
              </div>
            </div>

          );
        })}
      </div>
    </>
  );
}
