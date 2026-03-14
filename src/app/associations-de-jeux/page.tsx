
"use client";

import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin, Heart, Globe, Phone, Info, Swords, MessageSquare, Recycle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AssociationsPage() {
  const toulouseAssos = [
    { 
      name: "Happy People 31", 
      address: "13, Bd. Lascrosses, 31000 Toulouse", 
      desc: "Notre association ! On organise des sorties partout en ville pour créer du lien et du fun.",
      highlight: true
    },
    { 
      name: "Veni Vidi Ludi (VVL)", 
      address: "Port Saint-Sauveur / Centre-ville, Toulouse", 
      desc: "L'une des plus grosses associations de Toulouse. Ludothèque monumentale et soirées hebdomadaires.",
      url: "https://www.venividiludi.fr/"
    },
    { 
      name: "Terre de Jeu", 
      address: "3 rue Escoussières, 31000 Toulouse", 
      desc: "Une association passionnée proposant de nombreuses soirées et événements ludiques.",
      url: "https://www.terredejeu.fr/"
    },
    { 
      name: "AkroJeux", 
      address: "LevelUp : 96 Bd Pierre et Marie Curie / BlastoDice : 52 Av. Honoré Serres", 
      desc: "Collectif de créateurs et de passionnés. Aide à la découverte de nouveaux prototypes.",
      url: "https://www.facebook.com/Akrojeux"
    },
    { 
      name: "Buena Partida Social Club", 
      address: "125 avenue Jean Rieux, 31500 Toulouse", 
      desc: "Une ambiance conviviale pour jouer et échanger autour du jeu de société.",
      url: "https://buenapartida.wixsite.com/bpsc"
    },
    { 
      name: "Le Cercle de Séléné", 
      address: "Maison de quartier de la Prairie (Saint-Cyprien), Toulouse", 
      desc: "Très active sur le jeu de société moderne et le jeu de rôle.",
    },
    { 
      name: "Casus Belli", 
      address: "Université Toulouse Capitole, Toulouse", 
      desc: "Historiquement liée aux étudiants, mais ouverte à tous. Très axée Jeu de Rôle (JdR).",
      icon: Swords
    },
    { 
      name: "Le Cercle des Gobelins", 
      address: "Toulouse", 
      desc: "Association de figurines (Warhammer, escarmouches). Peinture et jeu dans une ambiance passionnée.",
      icon: Swords
    },
    { 
      name: "Opale Rôliste", 
      address: "Agglomération Toulousaine", 
      desc: "Coordination de parties de JdR sur toute l'agglomération. Pas de local fixe mais très active.",
      icon: Swords
    },
    { 
      name: "Toulouse Ludique", 
      address: "Itinérant / Bars, Toulouse", 
      desc: "Groupe organisant des rencontres informelles dans les bars ou chez les uns et les autres.",
      icon: MessageSquare
    },
    { 
      name: "Rejoué", 
      address: "Quartiers de Toulouse", 
      desc: "Association travaillant sur le recyclage des jeux et créant du lien social par le jeu.",
      icon: Recycle
    },
    { 
      name: "Le Verre à Pied", 
      address: "Quartier Saint-Cyprien, Toulouse", 
      desc: "Café associatif avec un groupe de joueurs réguliers le soir.",
      icon: MessageSquare
    },
    { 
      name: "L’En Jeux", 
      address: "Itinérant - Plusieurs localisations à Toulouse", 
      desc: "Un lieu ludique itinérant qui propose des animations variées.",
    },
    {
      name: "Mouvement des Auteurs Ludiques Toulousains (MALT)",
      address: "Toulouse",
      desc: "Collectif d'auteurs de jeux de la région toulousaine.",
      url: "https://www.facebook.com/maltoulouse"
    },
    {
      name: "La Tour à Dés",
      address: "Toulouse / Online",
      desc: "Association ludique toulousaine proposant divers événements.",
      url: "https://linktr.ee/latourades"
    }
  ];

  const banlieueAssos = [
    { 
      name: "Joc-Ere", 
      address: "Maison de la Citoyenneté, Place de la Mairie, 31170 Tournefeuille", 
      desc: "Une institution dans l'Ouest toulousain. Organisent le festival Autan du Jeu.",
      url: "http://www.joc-ere.org/"
    },
    { 
      name: "Les Gardiens du Jeu", 
      address: "Colomiers", 
      desc: "Une grosse structure qui touche à tout : plateau, figurines et cartes.",
    },
    { 
      name: "Cité en Jeux", 
      address: "27 allée de la champagne, 31770 Colomiers", 
      desc: "Association dynamique impliquée dans la vie locale et l'animation ludique.",
      url: "https://citeenjeux.fr/"
    },
    { 
      name: "Jeux de Plateau", 
      address: "Plaisance-du-Touch", 
      desc: "Association organisatrice du festival 'Plaisance joue en Touch'.",
    },
    { 
      name: "Plaisance du jeu", 
      address: "Maison des associations, 3 place Frédéric Mistral, 31830 Plaisance-du-Touch", 
      desc: "Une association dynamique pour les passionnés de Plaisance.",
      url: "https://plaisancedujeu.fr/"
    },
    { 
      name: "L’Oustal du Jeu", 
      address: "Escalquens (31750)", 
      desc: "Très conviviale, idéale pour le Sud-Est toulousain.",
    },
    { 
      name: "LauraGames", 
      address: "Espace Berjean, Chemin des écoles, Escalquens", 
      desc: "Boutique et association ludique à Escalquens.",
    },
    { 
      name: "La Voie du Thalos", 
      address: "11 rue Antoine Périès, 31320 Castanet-Tolosan", 
      desc: "Association ludique dynamique située au sud-est de Toulouse.",
      url: "https://www.voie-du-thalos.org/"
    },
    { 
      name: "Lud'Autan", 
      address: "Castanet-Tolosan", 
      desc: "Très active dans le Lauragais, ambiance familiale.",
    },
    { 
      name: "La Guilde des Pixels", 
      address: "Salle Saint-Exupéry au Château de Roquettes, 31120 Roquettes", 
      desc: "Association de jeux à Roquettes.",
      url: "https://la-guilde-des-pixels.e-monsite.com/",
      phone: "06 74 83 36 02"
    },
    { 
      name: "Scènes de Jeux", 
      address: "1 square des combattants d'Afrique du Nord, 31600 Muret", 
      desc: "Association muretaine passionnée de jeux.",
      url: "https://www.facebook.com/SDJMuret"
    },
    { 
      name: "Muret J'Y Joue", 
      address: "Muret", 
      desc: "Pour les joueurs du Sud de l'agglomération.",
    },
    { 
      name: "Académie des jeux", 
      address: "31600 Muret", 
      desc: "Association de jeux basée à Muret.",
    },
    { 
      name: "Double Jeux", 
      address: "8 avenue des Palanques, 31120 Portet-sur-Garonne", 
      desc: "Club de jeux de société, rétrogaming et tournois.",
      url: "https://www.doublejeux.fr/",
      phone: "09 72 12 60 66"
    },
    { 
      name: "Le Grenier à Jeux", 
      address: "L'Union", 
      desc: "Petite structure très sympa pour le Nord-Est toulousain.",
    },
    { 
      name: "La confrérie du plateau", 
      address: "1er étage du bâtiment Savary, 31140 Aucamville", 
      desc: "Association de jeux de plateau à Aucamville.",
      url: "https://www.facebook.com/jeuxplateau/"
    },
    { 
      name: "Ludophiles d’Occitanie – Ludocs", 
      address: "Maison des associations, 27 rue de l'église, 31620 Castelnau d'Estretefonds", 
      desc: "Partage de la passion ludique au nord de Toulouse.",
      url: "https://www.facebook.com/LudophilesOccitanie"
    },
    { 
      name: "Des jeux à vous", 
      address: "31150 Gratentour", 
      desc: "Promotion du jeu de société pour tous les publics au nord de Toulouse.",
      url: "http://www.desjeuxavous.fr/"
    },
    { 
      name: "Lud’Aussonne", 
      address: "Foyer Rurale, 8 Place du 8 Mai 1945, 31840 Aussonne", 
      desc: "Association conviviale du secteur d'Aussonne."
    },
    { 
      name: "Shiro Fonbo", 
      address: "Local associatif des Tilleuls, 5 rue des Tilleuls, 31140 Fonbeauzard", 
      desc: "Association ludique basée au local des Tilleuls.",
    },
    { 
      name: "Les Jeux de Ca’t", 
      address: "Espace François Mitterrand, Place François Fournil, 31860 Labarthe-sur-Lèze", 
      desc: "Soirées jeux à Labarthe-sur-Lèze.",
      phone: "06 77 42 86 92"
    },
    { 
      name: "Cité Meeple", 
      address: "Salle Blandinière, 22 rue de la République, 31270 Frouzins", 
      desc: "Une association conviviale pour les passionnés de Frouzins et alentours.",
      url: "https://www.citemeeple.fr/"
    },
    { 
      name: "Ludoragais", 
      address: "2 rue de la mairie, 31570 Lanta", 
      desc: "Promotion du jeu de société dans le secteur du Lauragais.",
      url: "https://ludoragais.fr/"
    },
    { 
      name: "L’Antre 2 Jeux", 
      address: "1 place d'armes, 31370 Rieumes", 
      desc: "Un espace dédié aux passionnés de jeux dans le secteur de Rieumes.",
      url: "https://lantre2jeux.wixsite.com/lantre2jeux",
      phone: "06 07 47 27 45"
    },
    { 
      name: "Parta’jeu", 
      address: "1A avenue des Ecoles, 31590 Verfeil", 
      desc: "Association ludique dynamique à Verfeil.",
      url: "http://parta-jeu.fr/",
      phone: "05 61 35 64 19"
    },
    { 
      name: "Loca", 
      address: "Rue des Eglantines, 31700 Blagnac", 
      phone: "06 66 04 49 11",
      url: "http://loca-jeux.fr/wordpress/",
      desc: "Association blagnacaise proposant des soirées jeux régulières." 
    },
    { 
      name: "Les Chevaliers du Pastel", 
      address: "Blagnac", 
      desc: "LA référence pour les jeux de figurines (Warhammer, Star Wars Legion).",
    },
    { 
      name: "Occitanie Jeux", 
      address: "Région Toulousaine", 
      desc: "Regroupe des passionnés de JCC (Magic, Lorcana) et de jeux de société." 
    },
    { 
      name: "T’as de beaux jeux", 
      address: "Pl. de la Fraternité, 82170 Bessens", 
      desc: "Association de jeux proposant des animations dans le secteur.",
      phone: "06 83 97 89 18",
      url: "https://www.facebook.com/tdbjeux/"
    },
    { 
      name: "Tous en Jeu", 
      address: "Itinérant / Ludothèque mobile", 
      desc: "Promotion du jeu par des animations mobiles.",
      phone: "06 18 61 58 91",
      url: "https://tousenjeu.com/"
    },
    { 
      name: "Homo ludens associés 31", 
      address: "Région Toulousaine", 
      desc: "Promotion du jeu sous toutes ses formes dans le 31.",
      url: "http://homoludensassocies.fr/hla31/",
      phone: "06 19 81 68 71"
    },
    { 
      name: "Les Chats Glacés", 
      address: "Agglomération Toulousaine", 
      desc: "Une communauté active pour des moments ludiques rafraîchissants."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pb-24">
        <section className="py-20 bg-[#FFF9F2] border-b text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-foreground font-bold text-sm border border-secondary/20">
            <Users className="h-4 w-4 text-secondary" />
            Communauté Ludique
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight px-4">
            Associations de jeux de société
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Les associations permettent au plus grand nombre d’amateurs de jouer ensemble. 
            Découvrez les clubs qui organisent des soirées jeux à Toulouse et aux alentours.
          </p>
        </section>

        <section className="py-16 container mx-auto px-4 max-w-7xl space-y-20">
          {/* Toulouse Section */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-headline font-bold">À Toulouse</h2>
              <div className="h-px bg-muted flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {toulouseAssos.map((asso, i) => (
                <AssoCard key={i} asso={asso} />
              ))}
            </div>
          </div>

          {/* Banlieue Section */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-headline font-bold">Banlieue de Toulouse</h2>
              <div className="h-px bg-muted flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {banlieueAssos.map((asso, i) => (
                <AssoCard key={i} asso={asso} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 max-w-4xl">
          <div className="p-8 bg-muted/10 rounded-[3rem] border-2 border-dashed border-muted text-center space-y-4">
            <Info className="h-8 w-8 text-secondary mx-auto" />
            <p className="text-muted-foreground italic text-lg">
              Seules les associations liées aux jeux de société variés sont listées ici. 
              Le site ne référence pas les associations spécialisées dans les jeux classiques (échecs, bridge, etc.).
              Les ludothèques municipales et médiathèques ont leur propre page dédiée.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function AssoCard({ asso }: { asso: any }) {
  const Icon = asso.icon || Heart;
  
  return (
    <Card className={`rounded-[2.5rem] border-2 hover:border-secondary/50 transition-all group shadow-sm flex flex-col h-full overflow-hidden ${asso.highlight ? 'bg-secondary/5 border-secondary/30' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="font-headline font-bold flex items-center gap-2 group-hover:text-secondary transition-colors leading-tight">
            <Icon className={`h-5 w-5 ${asso.highlight ? 'text-primary fill-primary' : 'text-secondary'}`} />
            {asso.name}
          </CardTitle>
          {asso.highlight && (
            <Badge className="bg-primary text-primary-foreground font-bold text-[10px] uppercase">Notre Asso</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6 flex-1 flex flex-col justify-between pt-0">
        <div className="space-y-4">
          {asso.desc && (
            <p className="text-muted-foreground text-sm italic leading-relaxed">
              "{asso.desc}"
            </p>
          )}
          <div className="space-y-2 pt-2">
            <div className="flex items-start gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{asso.address}</span>
            </div>
            {asso.phone && (
              <div className="flex items-center gap-2 text-sm font-medium">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="text-muted-foreground">{asso.phone}</span>
              </div>
            )}
            {asso.url && (
              <div className="flex items-center gap-2 text-sm font-medium">
                <Globe className="h-4 w-4 text-accent shrink-0" />
                <a href={asso.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline truncate">
                  {asso.url.replace('https://', '').replace('http://', '')}
                </a>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
