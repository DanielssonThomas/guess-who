import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import AddPlayerForm from "./addPlayer/addPlayerForm";
export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  supabase.from("players").select("*").then(console.log);

  return user?.aud === "authenticated" ? (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div />
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <AddPlayerForm uuid={user?.id} />
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
