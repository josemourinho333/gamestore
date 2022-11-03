import { GameCard } from "../components/GameCard"
import axios from "axios"

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
      <div className="text-3xl">
        import components for the homepage stuff and yada yada you know here.
        <GameCard></GameCard>
      </div>
    </>
  )
}
