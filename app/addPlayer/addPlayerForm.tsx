import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Player } from "../global";
import { redirect } from "next/navigation";
import PhotoBooth from "@/components/PhotoBooth";
import Questions from "@/components/QuestionList";

const AddPlayerForm = async () => {
  const registerPlayer = async (formData: FormData) => {
    "use server";
    const supabase = createServerActionClient<Player>({ cookies });
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const user_image = formData.get("user_image");
    const has_glasses = formData.get("has_glasses");
    const speaks_spanish = formData.get("speaks_spanish");
    const owns_console = formData.get("owns_console");
    const likes_sports = formData.get("likes_sports");
    const has_drivers_licence = formData.get("has_drivers_licence");
    const uses_mac = formData.get("uses_mac");
    const plays_instrument = formData.get("plays_instrument");
    const drinks_coffee = formData.get("drinks_coffee");
    const watched_GOT = formData.get("watched_GOT");
    const was_at_way_out_west = formData.get("was_at_way_out_west");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const id = user?.id;
    const { error } = await supabase.from("players").insert({
      id,
      first_name,
      last_name,
      user_image,
      has_glasses,
      speaks_spanish,
      owns_console,
      likes_sports,
      has_drivers_licence,
      uses_mac,
      plays_instrument,
      drinks_coffee,
      watched_GOT,
      was_at_way_out_west,
    });

    if (error) {
      console.log(error);
    }

    redirect("/game");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-2xl justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={registerPlayer}
      >
        <label className="text-md">First name:</label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="first_name"
          placeholder="Jhon"
          required
        />
        <label className="text-md">Last name:</label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="last_name"
          placeholder="Doe"
          required
        />
        <PhotoBooth />
        <Questions />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Continue
        </button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
