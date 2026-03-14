
"use client";

import Navbar from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Heart, Settings, Edit2, MapPin, Dice6, Activity, Star, Plus } from "lucide-react";
import EventCard from "@/components/EventCard";
import { MOCK_EVENTS, MOCK_GAMES, MOCK_PROFILES } from "@/lib/mock-data";
import Link from "next/link";

export default function ProfilePage() {
  const user = MOCK_PROFILES[0]; // Simulation de l'utilisateur connecté
  
  // Événements organisés par l'utilisateur
  const myHostedEvents = MOCK_EVENTS.filter(e => e.creator_id === user.id);
  
  // Événements auxquels l'utilisateur participe
  const myJoinedEvents = MOCK_EVENTS.filter(e => user.joined_events?.includes(e.id));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Sidebar Profil */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <Card className="overflow-hidden border-border/50 text-center rounded-[2.5rem] shadow-sm bg-white">
              <div className="h-28 bg-primary" />
              <CardContent className="relative pt-0 px-6 pb-8">
                <div className="inline-block relative -mt-14 mb-4">
<Avatar className="h-28 w-28 border-4 border-white shadow-xl">
  {/* On vérifie les deux noms possibles pour l'image */}
  <AvatarImage src={user.avatar_url || user.avatar} />
  <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-black">
    {/* On utilise name (ou username) avec une sécurité et une valeur par défaut */}
    {(user.name || user.username || "U").substring(0, 2).toUpperCase()}
  </AvatarFallback>
</Avatar>
                  <Button size="icon" variant="secondary" className="absolute bottom-1 right-1 h-9 w-9 rounded-full shadow-lg border-2 border-white hover:scale-110 transition-transform" asChild>
                    <Link href="/profile/settings"><Edit2 className="h-4 w-4" /></Link>
                  </Button>
                </div>
                
                <h2 className="text-3xl font-headline font-black tracking-tight">{user.username}</h2>
                <div className="flex items-center justify-center gap-1.5 text-muted-foreground font-medium mt-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  {user.location || "Toulouse"}
                </div>

                <div className="mt-6 py-5 px-5 bg-muted/30 rounded-[2rem] text-left">
                  <p className="text-[10px] font-black uppercase text-muted-foreground mb-3 tracking-widest">Bio</p>
                  <p className="text-sm italic leading-relaxed text-muted-foreground">
                    "{user.bio || "Pas encore de présentation."}"
                  </p>
                </div>

                <div className="flex justify-around items-center gap-2 mt-8 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <p className="font-black text-xl leading-none">{user.stats.sessions_played}</p>
                    <p className="text-[9px] uppercase font-black text-muted-foreground mt-1">Sessions</p>
                  </div>
                  <div className="w-px h-10 bg-border/50" />
                  <div className="text-center">
                    <p className="font-black text-xl leading-none text-primary">{user.stats.karma}</p>
                    <p className="text-[9px] uppercase font-black text-muted-foreground mt-1">Karma</p>
                  </div>
                  <div className="w-px h-10 bg-border/50" />
                  <div className="text-center">
                    <p className="font-black text-xl leading-none">{user.stats.sessions_hosted}</p>
                    <p className="text-[9px] uppercase font-black text-muted-foreground mt-1">Host</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-2 border-primary/10 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Settings className="h-4 w-4" /> Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-3 rounded-xl h-12 font-bold hover:bg-primary/5 hover:text-primary transition-colors" asChild>
                  <Link href="/profile/settings">Modifier mon profil</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl h-12 text-destructive hover:bg-destructive/5 font-bold">
                  Se déconnecter
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Zone de Contenu Principal */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Résumé des intérêts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-[2.5rem] border-2 border-secondary/20 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-headline font-black flex items-center gap-3">
                    <div className="p-2 bg-secondary/20 rounded-xl text-secondary">
                      <Dice6 className="h-5 w-5" />
                    </div>
                    Jeux Favoris
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0 rounded-full">
                    <Link href="/games"><Plus className="h-4 w-4" /></Link>
                  </Button>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {user.favorite_games && user.favorite_games.length > 0 ? (
                    user.favorite_games.map((game, i) => (
                      <Badge key={i} className="bg-secondary/10 text-secondary-foreground border-2 border-secondary/10 font-bold px-4 py-1.5 rounded-xl text-xs">
                        {game}
                      </Badge>
                    ))
                  ) : (
                    <div className="text-center py-4 w-full">
                      <p className="text-sm text-muted-foreground italic mb-2">Aucun jeu sélectionné.</p>
                      <Button variant="link" size="sm" asChild className="p-0 font-bold">
                        <Link href="/games">Ajouter des jeux</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="rounded-[2.5rem] border-2 border-accent/20 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-headline font-black flex items-center gap-3">
                    <div className="p-2 bg-accent/20 rounded-xl text-accent">
                      <Activity className="h-5 w-5" />
                    </div>
                    Sports Pratiqués
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0 rounded-full">
                    <Link href="/sports"><Plus className="h-4 w-4" /></Link>
                  </Button>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {user.favorite_sports && user.favorite_sports.length > 0 ? (
                    user.favorite_sports.map((sport, i) => (
                      <Badge key={i} className="bg-accent/10 text-accent border-2 border-accent/10 font-bold px-4 py-1.5 rounded-xl text-xs">
                        {sport}
                      </Badge>
                    ))
                  ) : (
                    <div className="text-center py-4 w-full">
                      <p className="text-sm text-muted-foreground italic mb-2">Aucun sport sélectionné.</p>
                      <Button variant="link" size="sm" asChild className="p-0 font-bold">
                        <Link href="/sports">Ajouter des sports</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="events" className="space-y-8">
              <TabsList className="bg-muted/50 p-1.5 h-16 rounded-[2rem] w-full max-w-lg shadow-inner">
                <TabsTrigger value="events" className="flex-1 rounded-[1.5rem] gap-2 font-black text-sm data-[state=active]:bg-white data-[state=active]:shadow-lg">
                  <Calendar className="h-4 w-4" /> Activités
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex-1 rounded-[1.5rem] gap-2 font-black text-sm data-[state=active]:bg-white data-[state=active]:shadow-lg">
                  <Trophy className="h-4 w-4" /> Succès
                </TabsTrigger>
              </TabsList>

              <TabsContent value="events" className="space-y-12 outline-none animate-in fade-in duration-500">
                {/* Organisés */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <h3 className="text-2xl font-headline font-black flex items-center gap-2">
                      Mes Sorties créées <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary border-none">{myHostedEvents.length}</Badge>
                    </h3>
                    <Button variant="ghost" asChild className="text-primary font-black hover:bg-primary/5">
                      <Link href="/events">Voir toutes mes sorties</Link>
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {myHostedEvents.map((event) => {
                      const game = MOCK_GAMES.find(g => g.id === event.game_id);
                      return <EventCard key={event.id} event={event} gameTitle={game?.title} />;
                    })}
                  </div>
                  {myHostedEvents.length === 0 && (
                    <div className="text-center py-16 bg-muted/10 rounded-[3rem] border-2 border-dashed border-muted/50">
                      <Dice6 className="h-10 w-10 text-muted-foreground/30 mx-auto mb-4" />
                      <p className="text-muted-foreground font-bold">Vous n'avez pas encore organisé de sortie.</p>
                      <Button asChild className="mt-4 rounded-full font-black">
                        <Link href="/events/new">Créer ma première sortie</Link>
                      </Button>
                    </div>
                  )}
                </div>

                {/* Rejointes */}
                <div className="space-y-6">
                  <div className="flex items-center px-2">
                    <h3 className="text-2xl font-headline font-black flex items-center gap-2">
                      Mes prochaines sorties <Badge variant="secondary" className="ml-2 bg-accent/10 text-accent border-none">{myJoinedEvents.length}</Badge>
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {myJoinedEvents.map((event) => {
                      const game = MOCK_GAMES.find(g => g.id === event.game_id);
                      return <EventCard key={event.id} event={event} gameTitle={game?.title} />;
                    })}
                  </div>
                  {myJoinedEvents.length === 0 && (
                    <div className="text-center py-16 bg-muted/10 rounded-[3rem] border-2 border-dashed border-muted/50">
                      <Heart className="h-10 w-10 text-muted-foreground/30 mx-auto mb-4" />
                      <p className="text-muted-foreground font-bold">Vous n'avez rejoint aucune sortie pour le moment.</p>
                      <Button variant="outline" asChild className="mt-4 rounded-full font-black border-primary text-primary hover:bg-primary/5">
                        <Link href="/events">Explorer les sorties disponibles</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="outline-none animate-in fade-in duration-500">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { label: "Pion du mois", desc: "A rejoint sa 10ème session", date: "12 Jan 2024", color: "bg-primary/10 text-primary" },
                    { label: "Stratège", desc: "A gagné 5 parties de Catan", date: "04 Fév 2024", color: "bg-secondary/10 text-secondary" },
                    { label: "Pilier Local", desc: "A organisé 5 sorties", date: "15 Mar 2024", color: "bg-accent/10 text-accent" },
                  ].map((ach, i) => (
                    <Card key={i} className="rounded-[2.5rem] border-border/50 text-center hover:scale-105 transition-all bg-white shadow-sm hover:shadow-xl group">
                      <CardHeader className="text-center pb-2">
                        <div className={`h-16 w-16 rounded-[1.5rem] ${ach.color} flex items-center justify-center mx-auto mb-4 shadow-inner group-hover:rotate-12 transition-transform`}>
                          <Trophy className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl font-black tracking-tight">{ach.label}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center pb-8 px-6">
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">{ach.desc}</p>
                        <div className="mt-6 flex items-center justify-center gap-2">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                          <p className="text-[10px] text-muted-foreground/60 font-black uppercase tracking-wider">{ach.date}</p>
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
