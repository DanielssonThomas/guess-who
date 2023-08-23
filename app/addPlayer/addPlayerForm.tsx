import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { PlayersRow } from "../global";
import { redirect } from "next/navigation";
const AddPlayerForm = async () => {
  const registerPlayer = async (formData: FormData) => {
    "use server";
    const supabase = createServerActionClient<PlayersRow>({ cookies });
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const id = user?.id;
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const user_image = null;
    const { error } = await supabase
      .from("players")
      .insert({ id, first_name, last_name, user_image });

    if (error) {
      console.log(error);
    }
    redirect("/game");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
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

        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Continue
        </button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
