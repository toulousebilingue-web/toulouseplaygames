
"use client";

import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Beer, MapPin, Info, Star, Map as MapIcon, Globe, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BarsAJeuxPage() {
  const toulouseBars = [
    { 
      name: "Baraka Jeux (Gare)", 
      address: "1 Bd de la Gare", 
      rating: "4.5", 
      reviews: "774",
      desc: "Jeux de société & bières artisanales. Un incontournable près du canal." 
    },
    { 
      name: "Baraka Jeux (Bourse)", 
      address: "18 Rue de la Bourse", 
      rating: "4.5", 
      reviews: "92",
      desc: "Une seconde adresse en plein centre pour profiter de leur ludothèque." 
    },
    { 
      name: "Les Tricheurs", 
      address: "34 Rue des Blanchers", 
      rating: "4.7", 
      reviews: "1 196",
      desc: "Ambiance conviviale et très grand choix de jeux de société." 
    },
    { 
      name: "BlastoDice", 
      address: "52 Av. Honoré Serres", 
      rating: "4.7", 
      reviews: "1 255",
      desc: "Bar original proposant tapas et jeux de société dans un cadre chaleureux." 
    },
    { 
      name: "La Taverne du Troll", 
      address: "11 Av. Maurice Hauriou", 
      rating: "4.7", 
      reviews: "316",
      desc: "Un repaire de passionnés pour jouer et boire un verre entre amis." 
    },
    { 
      name: "Level Up", 
      address: "96 Bd Pierre et Marie Curie", 
      rating: "4.9", 
      reviews: "525",
      desc: "Un excellent accueil et une ambiance au top pour vos soirées jeux." 
    },
    { 
      name: "La Guilde d’Andérexia", 
      address: "36 Bd Lascrosses", 
      rating: "5.0", 
      reviews: "109",
      desc: "Un lieu d'exception noté 5 étoiles par sa communauté." 
    },
    { 
      name: "Le P'tit Pion", 
      address: "35 Gd Rue Saint-Nicolas", 
      rating: "5.0", 
      reviews: "78",
      desc: "Café ludique très apprécié dans le quartier Saint-Cyprien." 
    },
    { 
      name: "Le Blast", 
      address: "8 Rue Gabriel Péri", 
      desc: "Bar à jeux moderne avec une immense ludothèque et une ambiance vibrante." 
    },
  ];

  const aggloBars = [
    { 
      name: "Double Jeux", 
      address: "8 avenue des Palanques, 31120 Portet-sur-Garonne", 
      phone: "09 72 12 60 66",
      url: "https://www.doublejeux.fr/",
      desc: "Spécialisé dans le jeu vidéo et le rétrogaming. Cocktails, Mario Kart et tournois de poker le mercredi." 
    },
    { 
      name: "Les 3 J", 
      address: "Saint-Lys", 
      desc: "À l'ouest de Toulouse, une boutique doublée d'un bel espace ludique très accueillant." 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="py-20 bg-[#FFF9F2] border-b text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
            <Beer className="h-4 w-4" />
            Sortir à Toulouse
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">Bars à Jeux</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">Découvrez les meilleurs endroits pour jouer autour d'un verre dans la Ville Rose.</p>
        </section>

        {/* Toulouse Centre */}
        <section className="py-16 container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <MapIcon className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-headline font-bold">Toulouse Centre</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toulouseBars.map((bar, i) => (
              <Card key={i} className="rounded-[2rem] border-2 hover:border-primary/50 transition-all group flex flex-col h-full overflow-hidden shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="font-headline font-bold group-hover:text-primary transition-colors">
                      {bar.name}
                    </CardTitle>
                    {bar.rating && (
                      <Badge variant="secondary" className="bg-secondary/20 text-foreground flex items-center gap-1 shrink-0">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        {bar.rating}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm italic">{bar.desc}</p>
                    <div className="flex items-start gap-2 text-sm font-medium">
                      <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{bar.address}</span>
                    </div>
                  </div>
                  {bar.reviews && (
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold pt-4 border-t">
                      {bar.reviews} avis clients
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Agglomération Section */}
        <section className="py-16 bg-muted/20 border-y">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-10">
              <MapIcon className="h-6 w-6 text-secondary" />
              <h2 className="text-3xl font-headline font-bold">En banlieue proche</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aggloBars.map((bar, i) => (
                <Card key={i} className="rounded-[2rem] border-2 bg-white hover:border-secondary/50 transition-all group shadow-sm flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="font-headline font-bold flex items-center gap-2 group-hover:text-secondary transition-colors">
                      <Beer className="h-5 w-5 text-secondary" />
                      {bar.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-muted-foreground italic text-sm">{bar.desc}</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm font-medium">
                          <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{bar.address}</span>
                        </div>
                        {bar.phone && (
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Phone className="h-4 w-4 text-accent" />
                            <span className="text-muted-foreground">{bar.phone}</span>
                          </div>
                        )}
                        {bar.url && (
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Globe className="h-4 w-4 text-accent" />
                            <a href={bar.url} target="_blank" className="text-primary hover:underline truncate">{bar.url.replace('https://', '')}</a>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 max-w-5xl">
          <div className="p-8 bg-muted/10 rounded-[2rem] text-center border-2 border-dashed">
            <Info className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground italic">Cette liste est collaborative et basée sur les avis de la communauté. Vous connaissez une autre adresse ? Contactez-nous !</p>
          </div>
        </section>
      </main>
    </div>
  );
}
