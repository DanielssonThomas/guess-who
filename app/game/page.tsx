import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import GameLayout from "../../components/GameLayout";
import LogoutButton from "@/components/LogoutButton";
import { Player } from "../global";
type Players = {
  error: true | null;
  data: Player[];
  count: number | null;
  status: number;
  statusText: string;
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

  const players: Player[] = data.map((player: Player) => ({
    first_name: player.first_name,
    last_name: player.last_name,
    has_glasses: player.has_glasses,
    drinks_coffee: player.drinks_coffee,
    has_drivers_licence: player.has_drivers_licence,
    likes_sports: player.likes_sports,
    owns_console: player.owns_console,
    plays_instrument: player.plays_instrument,
    speaks_spanish: player.speaks_spanish,
    uses_mac: player.uses_mac,
    was_at_way_out_west: player.was_at_way_out_west,
    watched_GOT: player.was_at_way_out_west,
    user_image: player.user_image,
    id: player.id,
  }));

  shufflePlayers(players);
  const selectedPlayers = players.slice(0, 25);

  const randomPlayer = Math.floor(Math.random() * 25);
  const selectedPlayer = selectedPlayers[randomPlayer];
  console.log(selectedPlayer);
  return (
    <div className="w-screen h-screen">
      <form action="/auth/sign-out" method="post">
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover absolute right-8 top-8 text-white">
          Logout
        </button>
      </form>

      <GameLayout players={selectedPlayers} selectedPlayer={selectedPlayer} />
    </div>
  );
};

export default GuessWhoGame;
