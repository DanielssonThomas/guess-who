"use client";
import { useState } from "react";
import Card from "./Card";

type Player = {
  name: string;
  image: string;
  id: number;
};

interface GameLayoutProps {
  players: Player[];
}

const Layout: React.FC<GameLayoutProps> = ({ players }) => {
  const [playersArray, setPlayersArray] = useState(players);
  return (
    <div className="w-full min-h-screen bg-slate-800">
      <div className="grid grid-cols-5 w-full gap-4 px-32 pt-8 mb-10 h-full">
        {playersArray.map((player) => (
          <Card
            twStyle="col-span-1 h-8"
            name={player.name}
            image={player.image}
            key={player.id}
          />
        ))}
      </div>
      <div className="flex w-full h-full items-center justify-around gap-5">
        <button
          className="h-8 p-2 bg-slate-200 flex justify-center items-center rounded"
          type="button"
        >
          Does the person like coffe?
        </button>
      </div>
    </div>
  );
};

export default Layout;
