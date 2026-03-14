
"use client";

import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, MapPin, Star, Phone, Clock, Map as MapIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MagasinsPage() {
  const centerShops = [
    { 
      name: "Le Passe Temps", 
      rating: "4.8", 
      reviews: "986", 
      address: "30 Rue des Lois", 
      type: "Spécialiste du jeu de société",
      desc: "Incontournable avec ses conseils avisés et sa célèbre chaîne YouTube." 
    },
    { 
      name: "C'est le jeu!", 
      rating: "4.8", 
      reviews: "543", 
      address: "52 Rue Léon Gambetta", 
      type: "Jeux de cartes / Jeux de plateaux",
      desc: "Une boutique passionnée avec un large choix de nouveautés." 
    },
    { 
      name: "Jeux du Monde", 
      rating: "4.8", 
      reviews: "455", 
      address: "77 Rue Pargaminières", 
      type: "Jeux de société & de rôle",
      desc: "Le repaire des rôlistes et des amateurs de jeux traditionnels." 
    },
    { 
      name: "Art et Jeux", 
      rating: "4.7", 
      reviews: "333", 
      address: "4 Rue Maurice Fonvieille", 
      type: "Jouets anciens & Jeux de société",
      desc: "Un charme authentique avec de beaux objets en bois et jeux classiques." 
    },
    { 
      name: "Univers Parallèle", 
      rating: "4.7", 
      reviews: "147", 
      address: "36 Rue Sainte-Ursule", 
      type: "Jeux de cartes / Jeux de plateaux",
      phone: "05 62 30 84 74",
      desc: "Boutique spécialisée au cœur du centre historique." 
    },
    { 
      name: "Fantasy Sphere", 
      rating: "4.5", 
      reviews: "389", 
      address: "93 Rue Pierre-Paul Riquet", 
      type: "Jeux de cartes / Jeux de plateaux",
      phone: "05 62 80 54 67",
      desc: "Spécialiste Magic et jeux de cartes à collectionner, ouvert tard." 
    },
    { 
      name: "Sabretache", 
      rating: "4.9", 
      reviews: "151", 
      address: "1B Rue Pargaminières", 
      type: "Jeux de cartes / Jeux de plateaux",
      phone: "05 61 21 34 57",
      desc: "Une adresse de référence avec une excellente notation." 
    },
    { 
      name: "Imagin'ères", 
      rating: "4.7", 
      reviews: "1 291", 
      address: "17 Rue Sainte-Ursule", 
      type: "Mangas & Produits dérivés",
      phone: "05 61 21 34 49",
      desc: "Parfait pour les fans de culture japonaise et figurines." 
    },
    { 
      name: "TABLERAZE TOULOUSE", 
      rating: "4.8", 
      reviews: "68", 
      address: "112-114 Av. de Muret", 
      type: "Jeux de cartes / Jeux de plateaux",
      phone: "09 51 93 55 22",
      desc: "Nouvelle adresse dynamique pour les joueurs de la rive gauche." 
    },
    { 
      name: "Relic", 
      rating: "4.8", 
      reviews: "327", 
      address: "32 Gd Rue Saint-Michel", 
      type: "Jeux de cartes / Jeux de plateaux",
      phone: "09 81 75 54 63",
      desc: "Propose également le retrait en magasin, quartier St-Michel." 
    },
    { 
      name: "All4Play", 
      rating: "4.9", 
      reviews: "16", 
      address: "203 Av. de Grande Bretagne", 
      type: "Boutique et Bar à Jeux",
      desc: "Un concept hybride pour acheter et tester sur place." 
    },
    { 
      name: "Witoa", 
      rating: "4.8", 
      reviews: "37", 
      address: "8 Av. Frédéric Estèbe", 
      type: "Jeux de cartes / Jeux de plateaux",
      phone: "05 61 57 61 66",
      desc: "Magasin passionné situé au nord du centre-ville." 
    },
    { 
      name: "Sorry Good Games", 
      address: "62 Rue de Metz", 
      type: "Jeux de cartes / Jeux de plateaux",
      phone: "06 21 86 09 84",
      desc: "Nouvelle boutique à découvrir près de la cathédrale." 
    },
  ];

  const banlieueShops = [
    { 
      name: "Le Cercle du Jeu", 
      address: "5 Rue des Écoles, 31830 Plaisance-du-Touch", 
      desc: "Boutique très appréciée, large sélection de jeux modernes et animations régulières." 
    },
    { 
      name: "Les 3 J", 
      address: "17 Rue de la République, 31470 Saint-Lys", 
      desc: "Un espace hybride qui fait à la fois boutique et lieu de rencontre ludique." 
    },
    { 
      name: "Lulu et Capucine", 
      address: "CC Bernadet, 31830 Plaisance-du-Touch", 
      desc: "Propose des jeux pour tous les âges, du premier âge aux jeux complexes." 
    },
    { 
      name: "Forges de Lumière", 
      address: "2 Avenue de Toulouse, 31320 Castanet-Tolosan", 
      desc: "Spécialiste du jeu de société, du jeu de rôle et du modélisme en plein cœur de ville." 
    },
    { 
      name: "Fantasy Sphère", 
      address: "Place Marnac, 31520 Ramonville-Saint-Agne", 
      desc: "Boutique incontournable pour les passionnés de jeux de cartes à collectionner (Magic, Pokémon), de jeux de rôle et de jeux de plateau." 
    },
    { 
      name: "BalmaKids", 
      address: "3 Avenue des Tuileries, 31130 Balma", 
      desc: "Magasin proposant une belle sélection de jeux de société familiaux et modernes, au cœur de Balma." 
    },
    { 
      name: "Le Jeu et Vous", 
      address: "5 Route d'Albi, 31180 Castelmaurou", 
      desc: "Une boutique de proximité dédiée aux loisirs ludiques au nord-est de Toulouse." 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pb-24">
        <section className="py-20 bg-[#FFF9F2] border-b text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm border border-accent/20">
            <ShoppingBag className="h-4 w-4" />
            Shopping Ludique
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight px-4">
            Magasins de Jeux de société
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Où acheter vos futurs jeux préférés à Toulouse et ses alentours ? Voici les meilleures adresses.
          </p>
        </section>

        {/* Centre-Ville */}
        <section className="py-16 container mx-auto px-4 max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <MapIcon className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-headline font-bold">Toulouse Centre</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centerShops.map((shop, i) => (
              <Card key={i} className="rounded-[2rem] border-2 hover:border-accent/50 transition-all group flex flex-col h-full overflow-hidden shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="font-headline font-bold group-hover:text-accent transition-colors">
                      {shop.name}
                    </CardTitle>
                    {shop.rating && (
                      <Badge variant="secondary" className="bg-secondary/20 text-foreground flex items-center gap-1 shrink-0">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        {shop.rating}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs font-bold text-accent uppercase tracking-wider">{shop.type}</p>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between pt-2">
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm italic">{shop.desc}</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm font-medium">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{shop.address}</span>
                      </div>
                      {shop.phone && (
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Phone className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-muted-foreground">{shop.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Banlieue */}
        <section className="py-16 bg-muted/20 border-y">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center gap-3 mb-10">
              <MapIcon className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-headline font-bold">Banlieue de Toulouse</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {banlieueShops.map((shop, i) => (
                <Card key={i} className="rounded-[2rem] border-2 bg-white hover:border-primary/50 transition-all group shadow-sm flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="font-headline font-bold group-hover:text-primary transition-colors">
                      {shop.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm italic">{shop.desc}</p>
                      <div className="flex items-start gap-2 text-sm font-medium">
                        <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{shop.address}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
