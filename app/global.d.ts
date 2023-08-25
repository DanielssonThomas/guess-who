import { Database } from "@/lib/database.types";

type PlayersInsert = Database["public"]["Tables"]["players"]["Insert"];
type Player = Database["public"]["Tables"]["players"]["Row"];
