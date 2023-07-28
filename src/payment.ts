
export type Betaler = "Mike" | "Sebastiaan" | "Maarten"

export type Payment = {
  bedrag: number
  betaler: Betaler
  omschrijving: string
}