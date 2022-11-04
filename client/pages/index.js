import { GameCard } from "../components/GameCard"
import axios from "axios"


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
    image:'https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg?t=1666630324',
    price:'Free',
    genres: ['MMORPG'],
    isSale: false,
  },
  {
    name: 'Cyberpunk 2077',
    image:'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1663663573',
    price:'$79.99',
    genres: ['Cyberpunk', 'Open World', 'RPG', 'Nudity'],
    isSale: true,
  },
  {
    name: 'Plateup!',
    image:'https://cdn.akamai.steamstatic.com/steam/apps/1599600/header_alt_assets_1.jpg?t=1666703697',
    price:'$20.49',
    genres:['Co-op', 'Management', 'Roguelite'],
    isSale: true,
  },
  {
    name: 'Rimworld',
    image:'https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg?t=1666905455',
    price:'$39.99',
    genres: ['Colony Sim', 'Base Building', 'Survival', 'Strategy'],
    isSale: true,
  },
]
export default function Home() {

  //Affected by CORS - will come back to this.

  // const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
  // const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET
  // let accessToken; 

  // const getAccessToken = async() =>{
  //   const authURL = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`
  //   await axios.post(authURL)
  //   .then((response)=>{accessToken = response.data.access_token})
  // }

  // const getVideoGames = async() => {
  //   await axios({
  //     url: "https://api.igdb.com/v4/games",
  //     method: 'POST',
  //     headers: {
  //         'Accept': 'application/json',
  //         'Client-ID': clientId,
  //         'Authorization': `Bearer ${accessToken}`,
  //     },
  //     data: 'name'
  //   })
  //     .then(response => {
  //         console.log(response.data);
  //     })
  //     .catch(err => {
  //         console.error(err);
  //     });
  // }

  // getAccessToken();
  // getVideoGames();


  return (
    <>
      <div className="font-bold">
        Edit main element in layout.jsx to configure width/padding of the section (minus navbar and footer) or just switch fragment in layout to a div then add if you want to configure whole page including those two.
      </div>
      <div className="text-3xl flex flex-col flex-wrap lg:flex-row ">
        {games.map( (game, index) => {
          return (
          <GameCard
          key={index}
          name={game.name}
          image={game.image}
          genres={game.genres}
          price={game.price}
          isSale={game.isSale}
          />
          )
        })}
      </div>
    </>
  )
}
