export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      players: {
        Row: {
          drinks_coffee: boolean | null
          first_name: string | null
          has_drivers_licence: boolean | null
          has_glasses: boolean | null
          id: string
          last_name: string | null
          likes_sports: boolean | null
          owns_console: boolean | null
          plays_instrument: boolean | null
          speaks_spanish: boolean | null
          user_image: string | null
          uses_mac: boolean | null
          was_at_way_out_west: boolean | null
          watched_GOT: boolean | null
        }
        Insert: {
          drinks_coffee?: boolean | null
          first_name?: string | null
          has_drivers_licence?: boolean | null
          has_glasses?: boolean | null
          id: string
          last_name?: string | null
          likes_sports?: boolean | null
          owns_console?: boolean | null
          plays_instrument?: boolean | null
          speaks_spanish?: boolean | null
          user_image?: string | null
          uses_mac?: boolean | null
          was_at_way_out_west?: boolean | null
          watched_GOT?: boolean | null
        }
        Update: {
          drinks_coffee?: boolean | null
          first_name?: string | null
          has_drivers_licence?: boolean | null
          has_glasses?: boolean | null
          id?: string
          last_name?: string | null
          likes_sports?: boolean | null
          owns_console?: boolean | null
          plays_instrument?: boolean | null
          speaks_spanish?: boolean | null
          user_image?: string | null
          uses_mac?: boolean | null
          was_at_way_out_west?: boolean | null
          watched_GOT?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "players_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
