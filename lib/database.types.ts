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
      player_information: {
        Row: {
          coffee: boolean | null
          console: boolean | null
          glasses: boolean | null
          GOT: boolean | null
          id: string
          instrument: boolean | null
          licence: boolean | null
          mac: boolean | null
          spanish: boolean | null
          sports: boolean | null
          Way_Out_West: boolean | null
        }
        Insert: {
          coffee?: boolean | null
          console?: boolean | null
          glasses?: boolean | null
          GOT?: boolean | null
          id: string
          instrument?: boolean | null
          licence?: boolean | null
          mac?: boolean | null
          spanish?: boolean | null
          sports?: boolean | null
          Way_Out_West?: boolean | null
        }
        Update: {
          coffee?: boolean | null
          console?: boolean | null
          glasses?: boolean | null
          GOT?: boolean | null
          id?: string
          instrument?: boolean | null
          licence?: boolean | null
          mac?: boolean | null
          spanish?: boolean | null
          sports?: boolean | null
          Way_Out_West?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "player_information_id_fkey"
            columns: ["id"]
            referencedRelation: "players"
            referencedColumns: ["id"]
          }
        ]
      }
      players: {
        Row: {
          first_name: string | null
          id: string
          last_name: string | null
          user_image: string | null
        }
        Insert: {
          first_name?: string | null
          id: string
          last_name?: string | null
          user_image?: string | null
        }
        Update: {
          first_name?: string | null
          id?: string
          last_name?: string | null
          user_image?: string | null
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
