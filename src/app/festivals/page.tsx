
"use client";

import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PartyPopper, Calendar, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FestivalsPage() {
  const fests = [
    { 
      name: "Alchimie du Jeu", 
      date: "8 au 10 mai 2026", 
      address: "MEETT (Aussonne)", 
      desc: "Le plus grand festival de la région, totalement gratuit.",
      badge: "Incontournable"
    },
    { 
      name: "Plaisance joue en Touch", 
      date: "5 avril 2026", 
      address: "Plaisance-du-Touch", 
      desc: "Un rendez-vous très familial et convivial à l'ouest de Toulouse." 
    },
    { 
      name: "Autan du Jeu", 
      date: "1 au 3 mai 2026", 
      address: "Tournefeuille (Le Phare)", 
      desc: "Une ambiance chaleureuse pour découvrir des centaines de jeux." 
    },
    { 
      name: "Festival de Rieumes", 
      date: "6 et 7 juin 2026", 
      address: "Rieumes", 
      desc: "Thématique \"Dragons\" cette année pour ce festival dynamique." 
    },
    { 
      name: "Lislenjeux", 
      date: "7 et 8 mars 2026", 
      address: "L'Isle-Jourdain", 
      desc: "Juste à côté de la banlieue Ouest, une belle occasion de jouer." 
    },
    { 
      name: "Festival de Colomiers", 
      date: "Octobre 2026 (Toussaint)", 
      address: "Hall Comminges", 
      desc: "Une véritable institution de la banlieue Ouest toulousaine." 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="py-20 bg-[#FFF9F2] border-b text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-foreground font-bold text-sm border border-secondary/20">
            <PartyPopper className="h-4 w-4 text-secondary" />
            Agenda Ludique 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight px-4">
            Festivals de Jeux
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ne manquez aucun grand rendez-vous ludique à Toulouse et dans ses environs.
          </p>
        </section>

        {/* Festival Cards */}
        <section className="py-16 container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fests.map((fest, i) => (
              <Card key={i} className="rounded-[2.5rem] border-2 hover:border-secondary/50 transition-all group flex flex-col h-full overflow-hidden shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="font-headline font-bold group-hover:text-secondary transition-colors">
                      {fest.name}
                    </CardTitle>
                    {fest.badge && (
                      <Badge className="bg-secondary text-secondary-foreground font-bold shrink-0">
                        {fest.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col justify-between pt-2">
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      "{fest.desc}"
                    </p>
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 text-sm font-bold text-primary">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Calendar className="h-4 w-4" />
                        </div>
                        {fest.date}
                      </div>
                      <div className="flex items-start gap-3 text-sm font-medium">
                        <div className="p-2 bg-accent/10 rounded-lg text-accent mt-0.5">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <span className="text-muted-foreground pt-1">{fest.address}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action or Info */}
        <section className="py-12 container mx-auto px-4 max-w-4xl">
          <div className="bg-muted/10 border-2 border-dashed border-muted rounded-[3rem] p-8 text-center space-y-4">
            <Star className="h-8 w-8 text-secondary mx-auto" />
            <h3 className="text-xl font-bold font-headline">D'autres événements à venir ?</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Cette liste est mise à jour régulièrement. Si vous organisez un festival ou une fête locale du jeu, n'hésitez pas à nous contacter !
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
