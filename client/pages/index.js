import { GameCard } from "../components/GameCard"

export default function Home() {
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
