"use client";
import { use, useState } from "react";
import Card from "./Card";
import { Player } from "@/app/global";
import GameGuess from "./GameGuess";
import AllGuesses from "@/lib/AllGuesses";
interface GameLayoutProps {
  players: Player[];
  selectedPlayer: Player;
}

const Layout: React.FC<GameLayoutProps> = ({ players, selectedPlayer }) => {
  const [playersArray, setPlayersArray] = useState(players);
  const [guess, setGuess] = useState(null);

  if (guess !== null) {
    const filteredPlayers: Player[] = playersArray.filter((player) => {
      const playerAnswer = player[guess];
      return playerAnswer === selectedPlayer[guess];
    });
    setGuess(null);
    setPlayersArray(filteredPlayers);
  }

  return (
    <div className="w-full min-h-screen bg-slate-800">
      <div className="grid grid-cols-5 w-full gap-4 px-32 pt-8 mb-10 h-full">
        {playersArray.map((player) => (
          <Card
            twStyle="col-span-1 h-8"
            name={player.first_name}
            image={player.user_image}
            key={player.id}
          />
        ))}
      </div>
      <div className="w-full flex justify-around flex-wrap gap-8">
        {AllGuesses.map((SingleGuess) => (
          <GameGuess
            guessDBname={SingleGuess.dbName}
            guessText={SingleGuess.questionText}
            guessed={SingleGuess.isGuessed}
            setGuess={setGuess}
            key={SingleGuess.key}
          />
        ))}
      </div>
    </div>
  );
};

export default Layout;
