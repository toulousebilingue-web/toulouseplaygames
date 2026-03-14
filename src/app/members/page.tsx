
"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Dice6, Activity, Star, UserPlus, MessageCircle, Users } from "lucide-react";
import { MOCK_PROFILES } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function MembersDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredMembers = MOCK_PROFILES.filter(m => 
    m.est_actif && 
    (m.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
     m.bio?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-muted/10">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">Annuaire des Membres</h1>
            <p className="text-xl text-muted-foreground font-medium">Faites connaissance avec la communauté Toulouse Play Games.</p>
          </div>
          <div className="relative w-full md:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Rechercher par pseudo, jeux, ville..." 
              className="h-16 pl-12 rounded-full border-2 bg-white text-lg shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="rounded-[2.5rem] border-2 hover:border-primary/50 transition-all overflow-hidden bg-white shadow-sm hover:shadow-xl group">
              <div className="h-24 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
              <CardContent className="relative pt-0 px-6 pb-8 text-center">
                <div className="inline-block relative -mt-12 mb-4">
                  <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
                    <AvatarImage src={member.avatar_url} />
                    <AvatarFallback className="bg-secondary text-secondary-foreground font-black text-xl">
                      {member.username.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-2xl font-headline font-black truncate">{member.username}</h3>
                <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm font-medium mt-1">
                  <MapPin className="h-3 w-3 text-accent" />
                  {member.location || member.ville || "Toulouse"}
                </div>

                <div className="mt-4 flex flex-wrap justify-center gap-1.5 h-[64px] overflow-hidden">
                  {member.favorite_games?.slice(0, 3).map((game, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary-foreground text-[10px] px-2 py-0.5 rounded-full">
                      {game}
                    </Badge>
                  ))}
                  {member.favorite_sports?.slice(0, 2).map((sport, i) => (
                    <Badge key={i} variant="outline" className="text-accent border-accent/30 text-[10px] px-2 py-0.5 rounded-full">
                      {sport}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t">
                  <Button variant="outline" size="sm" className="rounded-xl font-bold h-10 gap-2" asChild>
                    <Link href={`/messages?user=${member.id}`}>
                      <MessageCircle className="h-4 w-4" /> Message
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-xl font-bold h-10 gap-2 border-2 hover:bg-primary/5 hover:text-primary">
                    <Star className="h-4 w-4" /> Profil
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed">
            <Users className="h-16 w-16 text-muted-foreground/20 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-muted-foreground">Aucun membre trouvé</h3>
            <p className="text-muted-foreground mt-2">Essayez d'ajuster votre recherche.</p>
          </div>
        )}
      </main>
    </div>
  );
}
