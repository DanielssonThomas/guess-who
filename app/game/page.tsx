import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import GameLayout from "../../components/GameLayout";

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
  const supabase = createServerComponentClient<Players>({ cookies });
  const response = await supabase.from("players").select("*");

  if (response.error) {
    console.error("Supabase query error:", response.error);
    return <div>Error fetching data</div>;
  }

  const { data } = response;
  if (!data) {
    console.error("No data found in the Supabase response.");
    return <div>No data available</div>;
  }

  const players: Player[] = data.map((player) => ({
    name: player.first_name,
    image: player.user_image,
    id: player.id,
  }));
  console.log(players);

  return (
    <div className="w-screen h-screen">
      <GameLayout players={players} />
    </div>
  );
};

export default GuessWhoGame;
