
"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassWater, MapPin, Coffee, Beer, Utensils, Info, Cat, Bike, TreePine, Gamepad2, Users, Landmark, Wine, Sparkles, GraduationCap, Waves, Music } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BarsAvecJeuxPage() {
  const categories = [
    {
      title: "Pubs Internationaux (UK & Irish)",
      icon: Beer,
      items: [
        { name: "Dubliners", address: "46 Avenue Marcel Langer", city: "Toulouse", desc: "Un vrai pub de quartier. On y trouve souvent des jeux de cartes et quelques boîtes en libre accès.", icon: Beer },
        { name: "George and Dragon", address: "1 Place du Peyrou", city: "Toulouse", desc: "Très 'old school'. Le spot favori des expatriés pour faire une partie de cartes.", icon: Beer },
        { name: "O'Briens Irish Pub", address: "6 Rue de la Colombette", city: "Toulouse", desc: "Grand pub avec billard et fléchettes, mais aussi une petite étagère avec des jeux classiques (Monopoly, Scrabble).", icon: Beer },
        { name: "Seven Sisters", address: "20 Rue des Sept Troubadours", city: "Toulouse", desc: "Davantage axé sport, mais ils acceptent volontiers que vous sortiez un jeu.", icon: Beer },
        { name: "The Classroom", address: "14 Rue Pargaminières", city: "Toulouse", desc: "Bar à l'ambiance étudiante et internationale. Étagère de jeux classiques et modernes en libre accès.", icon: Beer },
        { name: "The Danu", address: "9 Rue du Pont Guilhemery", city: "Toulouse", desc: "Immense pub irlandais avec de grandes tables. Ils prêtent volontiers des jeux classiques (cartes, dominos) sur demande.", icon: Beer },
        { name: "The Dispensary", address: "1 Rue Marthe Varsi", city: "Toulouse", desc: "Ambiance 'famille et quartier' en journée. Parfait pour jouer tranquillement.", icon: Beer },
        { name: "The Frog & Rosbif", address: "14 Rue de l'Industrie", city: "Toulouse", desc: "Bière brassée sur place et étagères de jeux de société en libre-service. Très animé le week-end.", icon: Beer },
        { name: "The Hopscotch", address: "3 Rue Baour Lormian", city: "Toulouse", desc: "Pub écossais branché culture geek/ludique. Ils ont des jeux et organisent des événements thématiques.", icon: Beer },
        { name: "The London Town", address: "14 Rue des Prêtres (Carmes)", city: "Toulouse", desc: "Pub anglais typique. En plus des fléchettes et du billard, il met à disposition une sélection de jeux dans une ambiance boisée.", icon: Beer },
        { name: "The Thirsty Monk", address: "33 Allées Jules Guesde", city: "Toulouse", desc: "Axé sur les bières trappistes, l'ambiance calme en journée se prête bien au jeu.", icon: Beer },
        { name: "Tower of London", address: "39 Rue de la Colombette", city: "Toulouse", desc: "Plus spacieux que son voisin, ils proposent quelques jeux classiques.", icon: Beer },
      ]
    },
    {
      title: "Cafés, Salons de thé & Kids-Friendly",
      icon: Coffee,
      items: [
        { name: "Café de la Concorde", address: "17 Rue de la Concorde", city: "Toulouse", desc: "Lieu historique magnifique. Terrasse idéale pour les échecs ou le Scrabble.", icon: Landmark },
        { name: "Chapristea", address: "4 Rue des Lois", city: "Toulouse", desc: "Bar à chats idéal pour prendre un thé tout en profitant de quelques jeux calmes à disposition.", icon: Cat },
        { name: "Chez César", address: "Jardin des Plantes", city: "Toulouse", desc: "Buvette au cœur du parc. Ils proposent des jeux à emprunter pour jouer sur leurs tables en plein air.", icon: TreePine },
        { name: "Eurêkafé", address: "5 Impasse de la Colombette", city: "Toulouse", desc: "Café des curiosités : on paye au temps passé. Boissons et snacks à volonté, étagère de jeux et casse-têtes.", icon: Coffee },
        { name: "La Maison du Vélo", address: "12 Boulevard de Bonrepos", city: "Toulouse", desc: "Café associatif sous les tilleuls. Jeux de société simples dispo pour accompagner son café.", icon: Bike },
        { name: "Les P'tits Tou", address: "1 Rue de l'Écharpe", city: "Toulouse", desc: "Salon de thé 100% 'kids friendly' avec un espace dédié (puzzles, jeux de société, livres).", icon: Coffee },
        { name: "Pop’n CiTea", address: "12 Rue de la Dalbade", city: "Toulouse", desc: "Salon de thé spécialisé dans le Bubble Tea avec des jeux pour accompagner votre boisson.", icon: Coffee },
      ]
    },
    {
      title: "Bars de Quartier & Micro-brasseries",
      icon: GlassWater,
      items: [
        { name: "BFF - Bar & Food Forever", address: "Route de Narbonne", city: "Toulouse", desc: "Lieu convivial idéal pour se poser avec un jeu entre deux cours ou après le travail.", icon: GlassWater },
        { name: "Délirium Café", address: "54 Boulevard Lazare Carnot", city: "Toulouse", desc: "Immense choix de pressions et jeux classiques (Uno, Tarot) à demander au bar.", icon: Beer },
        { name: "L'Autruche", address: "1 Rue André Mercadier", city: "Toulouse", desc: "Bières artisanales brassées sur place et quelques jeux pour s'occuper entre amis.", icon: Beer },
        { name: "L'Évasion", address: "29 Grande Rue Saint-Nicolas", city: "Toulouse", desc: "Bar de quartier très cool disposant d'une étagère de jeux en libre-service.", icon: GlassWater },
        { name: "L'Escalier", address: "11 Rue du Collège de Foix", city: "Toulouse", desc: "Bar à cocktails discret disposant de jeux de société pour accompagner ses planches.", icon: Wine },
        { name: "Le Cacahuète", address: "22 Rue Réclusane", city: "Toulouse", desc: "Ambiance tamisée et décontractée, idéal pour une partie de cartes ou un Yam's.", icon: GlassWater },
        { name: "Le Chorus", address: "44 Rue Jules de Resseguier", city: "Toulouse", desc: "Bistro connu pour le jazz, mais propice aux échecs ou cartes en journée.", icon: Music },
        { name: "Le Dada", address: "27 Avenue de Muret", city: "Toulouse", desc: "Bistrot simple et sans chichis proposant des jeux de cartes et de plateau classiques.", icon: GlassWater },
        { name: "Le Petit Voisin", address: "37 Rue Peyrolières", city: "Toulouse", desc: "Bar de quartier authentique qui met à disposition des jeux pour ses clients.", icon: GlassWater },
        { name: "Le Rooster", address: "19 Rue de la Colombette", city: "Toulouse", desc: "Bar sympa avec terrasse, parfait pour un Uno ou un Jungle Speed après le marché.", icon: GlassWater },
        { name: "The Beer Social Club", address: "Place Marcel Bouilloux-Lafont", city: "Toulouse", desc: "Ambiance décontractée à Montaudran où il est courant de voir des groupes jouer.", icon: Beer },
      ]
    },
    {
      title: "Tiers-Lieux & Espaces Hybrides",
      icon: Users,
      items: [
        { name: "Avalon Pub & VR Gaming", address: "9 Rue Réclusane", city: "Toulouse", desc: "Mélange pub, réalité virtuelle, consoles rétro et jeux de société.", icon: Gamepad2 },
        { name: "Halle de la Cartoucherie", address: "Avenue de Grande Bretagne", city: "Toulouse", desc: "Immense espace de vie avec jeux en bois géants et jeux de société près de la librairie.", icon: Users },
        { name: "La Friche Gourmande", address: "Montaudran / Gramont", city: "Toulouse", desc: "Food courts avec jeux en libre accès gratuit contre dépôt d'une pièce d'identité.", icon: Utensils },
        { name: "La Maison Peinte", address: "Chemin de la Marine", city: "Banlieue (Labège)", desc: "Lieu hybride associatif avec une ludothèque participative et ambiance 'maison'.", icon: Users },
        { name: "Le Local Jeux", address: "Amicale INSAT (Rangueil)", city: "Toulouse", desc: "Incontournable pour les étudiants. Principalement ouvert le jeudi soir (19h-00h).", icon: GraduationCap },
        { name: "Le Salmanazar", address: "15 Rue de la Balance", city: "Toulouse", desc: "Café culturel associatif disposant d'une petite ludothèque et organisant des soirées jeux.", icon: Users },
        { name: "Les Amarres", address: "Port de l'Embouchure", city: "Toulouse", desc: "Guinguette associative au bord de l'eau. Jeux en libre-service pour profiter du cadre.", icon: Waves },
      ]
    },
    {
      title: "Concepts & Ambiances Spécifiques",
      icon: Sparkles,
      items: [
        { name: "Bota Pub (The Botanist)", address: "33 Boulevard d'Arcole", city: "Toulouse", desc: "Superbe cadre, assez grand pour jouer confortablement.", icon: Sparkles },
        { name: "Four Monkeys", address: "7 Rue de Metz", city: "Toulouse", desc: "Lieu récent et spacieux qui prête volontiers des jeux à ses clients.", icon: Beer },
        { name: "Game O'Clock", address: "10 Boulevard d'Arcole", city: "Toulouse", desc: "300m² dédiés au jeu : ludothèque, fléchettes et ambiance pub sportif.", icon: Gamepad2 },
        { name: "Le Breughel l'Ancien", address: "30 Rue de la Chaîne", city: "Toulouse", desc: "Ambiance médiévale et boisée, parfaite pour un JdR ou un jeu de plateau long.", icon: Landmark },
        { name: "Pub O’Clock", address: "21 Boulevard de Strasbourg", city: "Toulouse", desc: "Concept axé sur le jeu avec de nombreuses références disponibles.", icon: Sparkles },
        { name: "Rooster & Beer", address: "100 Rue Riquet", city: "Toulouse", desc: "On y va pour la bière artisanale et les jeux d'ambiance type Uno ou Jungle Speed.", icon: Beer },
        { name: "Sauvage Social Pub", address: "11 Place de la Trinité", city: "Toulouse", desc: "Immense espace hybride, très facile de s'y poser pour jouer en grand groupe.", icon: Sparkles },
        { name: "The Black Lion", address: "4 Allées Charles de Fitte", city: "Toulouse", desc: "Très grand avec beaucoup de tables, ils ont des jeux de société à disposition.", icon: Beer },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="py-20 bg-[#FFF9F2] border-b text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
            <Sparkles className="h-4 w-4" />
            Lieux Hybrides & Conviviaux
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight px-4">
            Bars & Salons avec Jeux
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Pas besoin d'être un bar à jeux spécialisé pour s'amuser ! Voici les adresses toulousaines (et alentours) qui mettent des jeux à disposition.
          </p>
        </section>

        {categories.map((category, catIdx) => (
          <section key={catIdx} className={`py-16 ${catIdx % 2 === 0 ? 'bg-white' : 'bg-muted/10'}`}>
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex items-center gap-3 mb-12">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-headline font-bold">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.sort((a, b) => a.name.localeCompare(b.name)).map((bar, i) => {
                  const Icon = bar.icon;
                  return (
                    <Card key={i} className="rounded-[2.5rem] border-2 hover:border-primary/50 transition-all group flex flex-col h-full shadow-sm overflow-hidden bg-white">
                      <CardHeader>
                        <div className="flex justify-between items-start gap-2">
                          <CardTitle className="font-headline font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                            <Icon className="h-5 w-5 text-primary/60" />
                            {bar.name}
                          </CardTitle>
                          <Badge variant="outline" className={bar.city.includes("Banlieue") ? "border-accent text-accent" : "border-primary text-primary"}>
                            {bar.city}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6 flex-1 flex flex-col justify-between pt-0">
                        <div className="space-y-4">
                          <p className="text-muted-foreground text-sm leading-relaxed italic">
                            "{bar.desc}"
                          </p>
                          <div className="flex items-start gap-2 text-sm font-medium pt-2">
                            <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{bar.address}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 container mx-auto px-4 max-w-4xl">
          <div className="p-8 bg-muted/10 rounded-[3rem] text-center border-2 border-dashed border-muted space-y-4">
            <Info className="h-8 w-8 text-primary mx-auto" />
            <p className="text-muted-foreground font-medium">
              Dans ces lieux, le jeu est souvent une activité complémentaire. Pensez à consommer sur place et à respecter le matériel mis gracieusement à votre disposition !
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-muted/10 border-t">
         <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm font-medium">
               © 2026 Happy People 31. Tous droits réservés.
            </p>
         </div>
      </footer>
    </div>
  );
}
