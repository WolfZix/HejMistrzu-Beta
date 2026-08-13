export const getCategoryStyles = (isPastEvent: boolean, isFull: boolean) => ({
  "Pokémon TCG": 
  `${(isPastEvent || isFull) 
    ? "bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground" 
    : "bg-yellow-950/80 text-yellow-200 border-yellow-500/50 shadow-yellow-500/30 hover:bg-yellow-800/30 hover:text-yellow-300"}`,
  "Riftbound": 
  `${(isPastEvent || isFull) 
    ? "bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground"
    : "bg-purple-950/80 text-purple-200 border-purple-500/50 shadow-purple-500/30 hover:bg-purple-800/30 hover:text-purple-300"}`,
  "Warhammer 40K": 
  `${(isPastEvent || isFull) 
    ? "bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground"
    : "bg-red-950/80 text-red-200 border-red-500/50 shadow-red-500/30 hover:bg-red-800/30 hover:text-red-300"}`,
  "Inne":
  `${(isPastEvent || isFull) 
    ? "bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground"
    : "bg-blue-950/80 text-blue-200 border-blue-500/50 shadow-blue-500/30 hover:bg-blue-800/30 hover:text-blue-300"}`,
});

export const getCategoryNames = () => ([
  "Pokémon TCG",
  "Riftbound",
  "Warhammer 40K",
  "Inne",
])