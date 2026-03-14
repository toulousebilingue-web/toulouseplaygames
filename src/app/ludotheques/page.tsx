
"use client";

import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Library, MapPin, Info, BookOpen, Map as MapIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function LudothequesPage() {
  const sectors = [
    {
      name: "Secteur Nord",
      items: [
        { name: "Ludothèque Nord", address: "Quartier Borderouge/Izards", desc: "Gérée par Alliances et Cultures, plus de 1 700 jeux. Jeu sur place pour une somme symbolique." },
        { name: "Ludothèque 123 Soleil", address: "Borderouge", desc: "Espace familial et chaleureux pour tous les âges. Jeu sur place et location." },
        { name: "Médiathèque des Minimes", address: "Place du Marché aux Cochons", desc: "Fonds de jeux de société consultables sur place entre deux lectures." },
      ]
    },
    {
      name: "Secteur Centre / Est",
      items: [
        { name: "Médiathèque José Cabanis", address: "Marengo (Pôle Intermezzo)", desc: "Jeux en libre accès et espaces dédiés au cœur de la plus grande médiathèque." },
        { name: "Bibliothèque Duranti", address: "6 Rue du Lieutenant-Colonel Pélissier", desc: "Organise les après-midis 'Ludoswitch' dédiés aux jeux de société et vidéo." },
        { name: "Les Ludotines", address: "8 impasse Saint-Aubin", desc: "Structure très axée sur la petite enfance et l'éveil par le jeu." },
        { name: "Ludomonde", address: "42 rue Henriette-Achiary (Guilheméry)", desc: "Une ludothèque historique et associative incontournable." },
        { name: "Game'Hers", address: "56 chemin du Château de l'Hers", desc: "Espaces de jeu dédiés et conseils avisés pour découvrir des nouveautés." },
      ]
    },
    {
      name: "Secteur Rive Gauche / Ouest",
      items: [
        { name: "Ludothèque ALLÉE Arènes", address: "150 bd Déodat de Séverac", desc: "L'une des plus grandes de Toulouse avec un choix immense de jeux modernes." },
        { name: "Ludothèque ALLÉE Cartoucherie", address: "Place de la Charte des Libertés", desc: "Nouvel espace moderne intégré au quartier de la Cartoucherie." },
        { name: "Ludogaronne", address: "7 chemin de la Garonne (Sept Deniers)", desc: "Association dynamique proposant de nombreuses animations." },
        { name: "Henri Desbals", address: "128 rue Henri-Desbals (Bagatelle)", desc: "Divisée en espaces 0-9 ans et +6 ans pour un accueil adapté." },
        { name: "Ludothèque Reynerie", address: "15 Place André Abbal", desc: "Cœur ludique du quartier avec des espaces pour tous les âges." },
        { name: "Médiathèque Grand M", address: "Avenue de la Reynerie", desc: "Fonds de jeux conséquent dans un cadre moderne et calme." },
      ]
    },
    {
      name: "Secteur Sud",
      items: [
        { name: "Arc en Ciel", address: "19 rue Claude-Forbin (Rangueil)", desc: "Ludothèque de quartier conviviale et très active." },
        { name: "Médiathèque Empalot Jean Moulin", address: "40 avenue Jean-Moulin", desc: "Intègre un espace jeux très fourni et des animations régulières." },
      ]
    }
  ];

  const banlieue = [
    { name: "Blagnac : La Ludothèque", address: "4 Avenue du Parc (Odyssud), 31700 Blagnac", desc: "Une véritable référence dans la région avec un fonds exceptionnel." },
    { name: "Colomiers : Cité en Jeux", address: "Allée de la Champagne (Maison de quartier de la Naspe), 31770 Colomiers", desc: "Structure associative très impliquée dans la vie locale." },
    { name: "Tournefeuille", address: "21 Rue de Paderne (Ludothèque de Paderne), 31170 Tournefeuille", desc: "Espace municipal accueillant pour les familles." },
    { name: "Plaisance-du-Touch", address: "Rue de la République (Médiathèque Agnès Varda), 31830 Plaisance-du-Touch", desc: "Structure moderne incluant la 'Ludimini' pour les plus petits." },
    { name: "Castanet-Tolosan", address: "Chemin des Genêts (Espace Envol), 31320 Castanet-Tolosan", desc: "Ludothèque municipale dynamique avec un beau catalogue." },
    { name: "Saint-Orens", address: "Place de la Fraternité (Centre Altigone), 31650 Saint-Orens-de-Gameville", desc: "Espace dédié au jeu au sein du pôle culturel." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="py-20 bg-[#FFF9F2] border-b text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm border border-accent/20">
            <Library className="h-4 w-4" />
            Espaces Publics & Associatifs
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight px-4">
            Ludothèques & Médiathèques
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Empruntez des jeux ou jouez sur place dans les nombreuses structures de Toulouse et sa métropole.
          </p>
        </section>

        {/* Toulouse par Secteur */}
        <section className="py-16 container mx-auto px-4 max-w-7xl">
          <div className="flex items-center gap-3 mb-12">
            <MapIcon className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-headline font-bold">Toulouse par Quartier</h2>
          </div>

          <div className="space-y-20">
            {sectors.map((sector, sIdx) => (
              <div key={sIdx} className="space-y-8">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="border-accent text-accent font-bold px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
                    {sector.name}
                  </Badge>
                  <div className="h-px bg-muted flex-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sector.items.map((item, i) => (
                    <Card key={i} className="rounded-[2rem] border-2 hover:border-accent/50 transition-all group flex flex-col h-full shadow-sm overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="font-headline font-bold group-hover:text-accent transition-colors flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-accent/60" />
                          {item.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <p className="text-muted-foreground text-sm italic">{item.desc}</p>
                          <div className="flex items-start gap-2 text-sm font-medium">
                            <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{item.address}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Banlieue Section */}
        <section className="py-16 bg-muted/20 border-y">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center gap-3 mb-10">
              <Library className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-headline font-bold">En Banlieue (Métropole)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {banlieue.map((shop, i) => (
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

        {/* Advice Section */}
        <section className="py-16 container mx-auto px-4 max-w-4xl">
          <div className="p-8 md:p-12 bg-primary/5 rounded-[3rem] border-2 border-dashed border-primary/20 space-y-6">
            <div className="flex items-center gap-3 justify-center mb-4">
              <Info className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-headline font-black">Conseil d'ami</h3>
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed font-medium">
              Pour les ludothèques municipales, l'accès au jeu sur place est souvent <span className="text-foreground font-bold underline decoration-primary/30">gratuit</span>. 
              Cependant, l'emprunt de jeux nécessite généralement une adhésion annuelle, qui reste très accessible (souvent entre <span className="text-primary font-bold">5€ et 15€</span> par an).
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
