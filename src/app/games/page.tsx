
"use client";

import { useState, useEffect } from "react";
import { Dice6, Search, Users, Trophy, Heart, Plus, Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MOCK_GAMES, MOCK_PROFILES } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function GamesPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  // Initialisation des favoris depuis le mock
  useEffect(() => {
    const user = MOCK_PROFILES[0];
    setFavorites(user.favorite_games || []);
  }, []);

  const toggleFavorite = (gameTitle: string) => {
    const isFav = favorites.includes(gameTitle);
    const newFavorites = isFav
      ? favorites.filter(t => t !== gameTitle)
      : [...favorites, gameTitle];
    
    setFavorites(newFavorites);
    
    toast({
      title: isFav ? "Jeu retiré" : "Jeu ajouté",
      description: `${gameTitle} a été ${isFav ? "retiré de" : "ajouté à"} votre profil.`,
    });
  };

  const filteredGames = MOCK_GAMES.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-headline font-bold">Catalogue de Jeux</h1>
            <p className="text-muted-foreground">Parcourez la collection et ajoutez vos jeux préférés à votre profil.</p>
          </div>
        </div>

        <div className="relative mb-12 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Rechercher un jeu..." 
            className="pl-10 h-12 rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => {
            const isFav = favorites.includes(game.title);
            return (
              <Card key={game.id} className={cn(
                "group hover:border-primary/50 transition-all overflow-hidden flex flex-col h-full",
                isFav && "border-primary/30 bg-primary/5"
              )}>
                <CardHeader className="p-5 pb-2">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">{game.category}</Badge>
                    <Button 
                      variant={isFav ? "default" : "outline"}
                      size="sm" 
                      className={cn(
                        "rounded-full font-bold h-9 px-4 transition-all gap-2",
                        isFav ? "bg-primary text-white" : "hover:border-primary hover:text-primary"
                      )}
                      onClick={() => toggleFavorite(game.title)}
                    >
                      {isFav ? (
                        <>
                          <Check className="h-4 w-4" />
                          Sélectionné
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4" />
                          Ajouter
                        </>
                      )}
                    </Button>
                  </div>
                  <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors mt-2">{game.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-4 flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {game.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-accent" />
                      <span>{game.min_players}-{game.max_players} Joueurs</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-0 mt-auto">
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                    <Trophy className="h-3 w-3" />
                    Populaire à Toulouse
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
