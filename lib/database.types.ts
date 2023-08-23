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
