
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Zap, Heart, Bike, Waves, Mountain, Wind, Target, Brain, Activity, Dumbbell, ShieldCheck, Car, Swords, Info, Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_PROFILES } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const SPORTS_DATA = [
  {
    category: "Athlétisme",
    icon: Activity,
    color: "text-primary",
    items: [
      "Marche", "Course à pied", "Course d'obstacles (Haies, Steeple...)", "Course de relais", "Sprint", "Demi-fond", "Course de fond (Marathon, Trail...)", "Ultrafond", "Lancers (Disque, Javelot, Marteau, Poids)", "Sauts (Longueur, Hauteur, Perche, Triple saut)", "Épreuves combinées (Décathlon, Heptathlon, Pentathlon)"
    ]
  },
  {
    category: "Sports collectifs",
    icon: Users,
    color: "text-accent",
    items: [
      "Football", "Basket-ball", "Rugby (XV, XIII, VII)", "Volley-ball", "Handball", "Baseball", "Cricket", "Futsal", "Hockey sur glace", "Hockey sur gazon", "Water-polo", "Beach Volley", "Beach Soccer", "Flag football", "Floorball", "Lacrosse", "Polo", "Ultimate Frisbee", "Paintball", "Sepak Takraw"
    ]
  },
  {
    category: "Sports de force",
    icon: Dumbbell,
    color: "text-primary",
    items: [
      "Bras de fer", "Bodybuilding", "Force basque", "Haltérophilie", "Powerlifting", "Tir à la corde", "Girevoy", "Highland Games"
    ]
  },
  {
    category: "Sports mécaniques",
    icon: Car,
    color: "text-destructive",
    items: [
      "Formule 1", "Karting", "Rallye (WRC)", "Moto (MotoGP, Enduro, Trial)", "Motocross", "NASCAR", "IndyCar", "Dragster", "Motonautisme", "Aéronautique"
    ]
  },
  {
    category: "Sports de raquette",
    icon: Target,
    color: "text-accent",
    items: [
      "Tennis", "Badminton", "Padel", "Tennis de table", "Squash", "Pelote basque", "Racketlon", "Racquetball", "Speed-ball"
    ]
  },
  {
    category: "Sports avec animaux",
    icon: Heart,
    color: "text-secondary",
    items: [
      "Équitation (CSO, Dressage, Complet)", "Sport hippique", "Polo", "Cani-cross", "Agility", "Courses de lévriers", "Course de traîneaux", "Rodéo"
    ]
  },
  {
    category: "Sports anciens",
    icon: Trophy,
    color: "text-muted-foreground",
    items: [
      "Jeu de paume", "Soule", "Pancrace", "Pentathlon antique", "Pugilat", "Jeu de mail", "Calcio florentin"
    ]
  },
  {
    category: "Sports gymniques et artistiques",
    icon: Zap,
    color: "text-secondary",
    items: [
      "Gymnastique artistique", "Gymnastique rythmique", "Trampoline", "Fitness", "Aérobic", "Danse sportive", "Breakdance", "Patinage artistique", "Natation synchronisée", "Plongeon", "Pole dance", "Parkour"
    ]
  },
  {
    category: "Cyclisme",
    icon: Bike,
    color: "text-primary",
    items: [
      "Cyclisme sur route", "VTT", "BMX (Race & Freestyle)", "Cyclisme sur piste", "Cyclisme sur route", "VTT", "BMX", "Trial"
    ]
  },
  {
    category: "Arts martiaux & Combat",
    icon: Swords,
    color: "text-destructive",
    items: [
      "Judo", "Karaté", "Aïkido", "Taekwondo", "Kendo", "Boxe (Anglaise, Thaï, Savate)", "Kick-boxing", "Lutte", "MMA", "Escrime", "Krav-maga", "Jiu-jitsu brésilien"
    ]
  },
  {
    category: "Sports de glace",
    icon: Waves,
    color: "text-accent",
    items: [
      "Hockey sur glace", "Curling", "Patinage de vitesse", "Short-track", "Bobsleigh", "Luge", "Skeleton"
    ]
  },
  {
    category: "Sports de plein air",
    icon: Mountain,
    color: "text-primary",
    items: [
      "Escalade", "Alpinisme", "Randonnée pédestre", "Course d'orientation", "Spéléologie", "Canyonisme", "Trail", "Jogging", "Marche nordique"
    ]
  },
  {
    category: "Sports aériens",
    icon: Wind,
    color: "text-accent",
    items: [
      "Parachutisme", "Parapente", "Deltaplane", "Vol libre", "Voltige aérienne"
    ]
  },
  {
    category: "Épreuves combinées",
    icon: Zap,
    color: "text-primary",
    items: [
      "Triathlon", "Duathlon", "Aquathlon", "Pentathlon moderne", "Biathlon"
    ]
  },
  {
    category: "Sports de précision",
    icon: Target,
    color: "text-secondary",
    items: [
      "Golf", "Pétanque", "Tir à l'arc", "Billard", "Bowling", "Fléchettes", "Tir sportif"
    ]
  },
  {
    category: "Sports nautiques",
    icon: Waves,
    color: "text-accent",
    items: [
      "Natation", "Surf", "Voile", "Aviron", "Canoë-kayak", "Planche à voile", "Kitesurf", "Plongée sous-marine"
    ]
  },
  {
    category: "Sports de glisse",
    icon: Mountain,
    color: "text-primary",
    items: [
      "Ski alpin", "Ski de fond", "Snowboard", "Skateboard", "Roller", "Trottinette Freestyle"
    ]
  },
  {
    category: "Sports cérébraux",
    icon: Brain,
    color: "text-secondary",
    items: [
      "Échecs", "Poker", "Bridge", "Dames", "Go", "Scrabble"
    ]
  }
];

export default function SportsPage() {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const user = MOCK_PROFILES[0];
    setFavorites(user.favorite_sports || []);
  }, []);

  const toggleFavorite = (sport: string) => {
    const newFavorites = favorites.includes(sport)
      ? favorites.filter(s => s !== sport)
      : [...favorites, sport];
    
    setFavorites(newFavorites);
    
    toast({
      title: favorites.includes(sport) ? "Sport retiré" : "Sport ajouté",
      description: `${sport} a été mis à jour dans votre profil.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Hero Section */}
        <section className="py-16 bg-[#FFF9F2] border-b">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
              <Trophy className="h-4 w-4" />
              Sport & Équipes
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight leading-none">
              Trouve tes partenaires de <span className="text-primary">Sport</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Explorez le catalogue et ajoutez vos sports à votre profil pour trouver des coéquipiers plus facilement.
            </p>
            
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl border border-dashed border-primary/20 text-left text-sm max-w-2xl mx-auto">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="font-medium">
                Cliquez sur le bouton <Plus className="inline h-3 w-3" /> pour ajouter un sport à vos favoris sur votre profil.
              </p>
            </div>
          </div>
        </section>

        {/* Accordions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-10">
              <h2 className="text-3xl font-headline font-black mb-2">Catalogue des Sports</h2>
              <p className="text-muted-foreground">Cliquez sur une catégorie, puis sur un sport pour l'ajouter à votre profil.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {SPORTS_DATA.map((cat, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="border-2 border-muted rounded-[2rem] px-6 bg-white overflow-hidden hover:border-primary/20 transition-all shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className={cn("p-3 rounded-xl bg-muted/50", cat.color)}>
                        <cat.icon className="h-5 w-5" />
                      </div>
                      <span className="text-xl font-bold font-headline">{cat.category}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.items.map((item, i) => {
                        const isFav = favorites.includes(item);
                        return (
                          <Button 
                            key={i} 
                            variant={isFav ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleFavorite(item)}
                            className={cn(
                              "rounded-xl h-10 px-4 font-bold transition-all gap-2",
                              isFav ? "bg-primary text-white" : "hover:border-primary hover:text-primary"
                            )}
                          >
                            {isFav ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                            {item}
                          </Button>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-muted/10 border-t">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
            <Link href="/about" className="hover:text-primary transition-colors font-bold">À propos</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
            <Link href="/legal" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link href="/charte" className="hover:text-primary transition-colors">Charte d'utilisation</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Nous contacter</Link>
          </div>
          <p className="text-muted-foreground text-sm font-medium">
             © 2026 Happy People 31. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
