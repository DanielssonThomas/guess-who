import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import AddPlayerForm from "./addPlayer/addPlayerForm";
import { Database } from "@/lib/database.types";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error, data } = await supabase
    .from("players")
    .select("id")
    .match({ id: user?.id });

  if (error) {
    console.log(error);
  }
  if (data?.length === 1) {
    redirect("/game");
  }
  return user?.aud === "authenticated" ? (
    <div className="w-screen flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div className="w-full flex justify-center items-center gap-4">
            Hey! Enter your information, get a nice profile pic and answer some
            questions to get started!
          </div>
        </div>
      </nav>
      <div className="w-screen pt-8 flex justify-center items-center">
        <AddPlayerForm />
      </div>
    </div>
  ) : (
    <div>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-center items-center p-3 text-sm text-foreground">
          <Link
            href="/login"
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Login
          </Link>
        </div>
      </nav>
      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          <h1 className=" text-white text-4xl">Welcome to guess who!</h1>
          <br />
          <h2 className="text-white text-2xl">
            Sign up or sign in to get started
          </h2>
        </div>
      </div>
    </div>
  );
}
