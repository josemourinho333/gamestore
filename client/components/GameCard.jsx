import React from "react";

export const GameCard = (props) => {

  const gameName = 'Game Name'
  const gameGenres = ['GG1', 'GG2', 'GG3']


  return (
    <div className="">
      <h3>{gameName}</h3>
      <footer><p>{gameGenres}</p></footer>
    </div>
  )
}