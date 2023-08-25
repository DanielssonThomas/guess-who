import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import GameLayout from "../../components/GameLayout";
import LogoutButton from "@/components/LogoutButton";

type Players = {
  error: true | null;
  data: {
    id: number;
    first_name: string;
    last_name: string;
    user_image: string;
  };
  count: number | null;
  status: number;
  statusText: string;
};

type Player = {
  name: string;
  image: string;
  id: number;
};

const GuessWhoGame = async () => {
  const shufflePlayers = (players: Player[]) => {
    for (let i = players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];
    }
  };

  const supabase = createServerComponentClient<Players>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const playersResponse = await supabase
    .from("players")
    .select("*")
    .not("id", "eq", user?.id);

  const { data } = playersResponse;
  if (!data) {
    console.error("No data found in the Supabase response.");
    return <div>No data available</div>;
  }

  const players: Player[] = data.map((player) => ({
    name: player.first_name,
    image: player.user_image,
    id: player.id,
  }));

  shufflePlayers(players);
  const selectedPlayers = players.slice(0, 25);
  return (
    <div className="w-screen h-screen">
      <form action="/auth/sign-out" method="post">
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover absolute right-8 top-8 text-white">
          Logout
        </button>
      </form>

      <GameLayout players={selectedPlayers} />
    </div>
  );
};

export default GuessWhoGame;
