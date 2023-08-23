import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const { first_name, last_name } = await request.json();
  const supabase = createServerComponentClient({ cookies });
  const { data: players } = await supabase
    .from("players")
    .insert({ first_name, last_name });
  return NextResponse.json(players);
}
