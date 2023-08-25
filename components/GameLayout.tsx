"use client";
import { use, useState } from "react";
import Card from "./Card";
import { Player } from "@/app/global";
import GameGuess from "./GameGuess";
import AllGuesses from "@/lib/AllGuesses";
import GameFinished from "./GameFinished";

interface GameLayoutProps {
  players: Player[];
  selectedPlayer: Player;
}

const Layout: React.FC<GameLayoutProps> = ({ players, selectedPlayer }) => {
  const [playersArray, setPlayersArray] = useState(players);
  const [guesses, setGuesses] = useState(AllGuesses);
  const [question, setQuestion] = useState(null);
  const [userGuess, setUserGuess] = useState(null);

  if (question !== null) {
    const filteredPlayers: Player[] = playersArray.filter((player) => {
      const playerAnswer = player[question];
      return playerAnswer === selectedPlayer[question];
    });

    setGuesses((prevGuesses) =>
      prevGuesses.map((prevGuess) =>
        prevGuess.dbName === question
          ? {
              ...prevGuess,
              isGuessed: true,
              AnsweredResult: selectedPlayer[question],
            }
          : prevGuess
      )
    );
    setQuestion(null);
    setPlayersArray(filteredPlayers);
  }

  return playersArray.length !== 1 ? (
    <div className="w-full min-h-screen bg-slate-800">
      {userGuess !== null ? (
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover absolute right-8 top-20 text-white">
          Guess!
        </button>
      ) : (
        <div></div>
      )}
      <div className="grid grid-cols-5 w-full gap-4 px-32 pt-8 mb-10 h-full">
        {playersArray.map((player) => (
          <Card
            twStyle="col-span-1 h-8"
            name={player.first_name}
            image={player.user_image}
            selected={userGuess === player.id ? true : false}
            setUserGuess={setUserGuess}
            key={player.id}
          />
        ))}
      </div>
      <div className="w-full flex justify-around flex-wrap gap-6 absolute bottom-4">
        {guesses.map((SingleGuess) => (
          <GameGuess
            guessDBname={SingleGuess.dbName}
            guessText={SingleGuess.questionText}
            guessed={SingleGuess.isGuessed}
            answeredResult={SingleGuess.AnsweredResult}
            setGuess={setQuestion}
            key={SingleGuess.key}
          />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <GameFinished
        first_name={selectedPlayer.first_name}
        last_name={selectedPlayer.last_name}
        user_imageUrl={selectedPlayer.user_image}
        victory={true}
      />
    </div>
  );
};

export default Layout;
