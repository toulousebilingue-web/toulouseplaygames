export interface Bar {
  name: string;
  address: string;
  city: string;
  type: 'Bar à jeux' | 'Bar avec jeux';
  desc?: string;
  rating?: string;
}

export const GAME_BARS: Bar[] = [
  { name: "Baraka Jeux (Gare)", address: "1 Bd de la Gare", city: "Toulouse", type: "Bar à jeux", rating: "4.5", desc: "Jeux de société & bières artisanales. Un incontournable près du canal." },
  { name: "Baraka Jeux (Bourse)", address: "18 Rue de la Bourse", city: "Toulouse", type: "Bar à jeux", rating: "4.5", desc: "Une seconde adresse en plein centre pour profiter de leur ludothèque." },
  { name: "Les Tricheurs", address: "34 Rue des Blanchers", city: "Toulouse", type: "Bar à jeux", rating: "4.7", desc: "Ambiance conviviale et très grand choix de jeux de société." },
  { name: "BlastoDice", address: "52 Av. Honoré Serres", city: "Toulouse", type: "Bar à jeux", rating: "4.7", desc: "Bar original proposant tapas et jeux de société dans un cadre chaleureux." },
  { name: "La Taverne du Troll", address: "11 Av. Maurice Hauriou", city: "Toulouse", type: "Bar à jeux", rating: "4.7", desc: "Un repaire de passionnés pour jouer et boire un verre entre amis." },
  { name: "Level Up", address: "96 Bd Pierre et Marie Curie", city: "Toulouse", type: "Bar à jeux", rating: "4.9", desc: "Un excellent accueil et une ambiance au top pour vos soirées jeux." },
  { name: "La Guilde d’Andérexia", address: "36 Bd Lascrosses", city: "Toulouse", type: "Bar à jeux", rating: "5.0", desc: "Un lieu d'exception noté 5 étoiles par sa communauté." },
  { name: "Le P'tit Pion", address: "35 Gd Rue Saint-Nicolas", city: "Toulouse", type: "Bar à jeux", rating: "5.0", desc: "Café ludique très apprécié dans le quartier Saint-Cyprien." },
  { name: "Le Blast", address: "8 Rue Gabriel Péri", city: "Toulouse", type: "Bar à jeux", desc: "Bar à jeux moderne avec une immense ludothèque et une ambiance vibrante." },
  { name: "Double Jeux", address: "8 avenue des Palanques", city: "Portet-sur-Garonne", type: "Bar à jeux", desc: "Spécialisé dans le jeu vidéo et le rétrogaming. Cocktails, Mario Kart." },
  { name: "Les 3 J", address: "Rue de la République", city: "Saint-Lys", type: "Bar à jeux", desc: "À l'ouest de Toulouse, une boutique doublée d'un bel espace ludique." },
];

export const BARS_WITH_GAMES: Bar[] = [
  { name: "Avalon Pub & VR Gaming", address: "9 Rue Réclusane", city: "Toulouse", type: "Bar avec jeux" },
  { name: "BFF - Bar & Food Forever", address: "Route de Narbonne", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Bota Pub (The Botanist)", address: "33 Boulevard d'Arcole", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Café de la Concorde", address: "17 Rue de la Concorde", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Chapristea", address: "4 Rue des Lois", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Chez César", address: "Jardin des Plantes", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Délirium Café", address: "54 Boulevard Lazare Carnot", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Dubliners", address: "46 Avenue Marcel Langer", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Eurêkafé", address: "5 Impasse de la Colombette", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Four Monkeys", address: "7 Rue de Metz", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Game O'Clock", address: "10 Boulevard d'Arcole", city: "Toulouse", type: "Bar avec jeux" },
  { name: "George and Dragon", address: "1 Place du Peyrou", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Halle de la Cartoucherie", address: "Avenue de Grande Bretagne", city: "Toulouse", type: "Bar avec jeux" },
  { name: "L'Autruche", address: "1 Rue André Mercadier", city: "Toulouse", type: "Bar avec jeux" },
  { name: "L'Escalier", address: "11 Rue du Collège de Foix", city: "Toulouse", type: "Bar avec jeux" },
  { name: "L'Évasion", address: "29 Grande Rue Saint-Nicolas", city: "Toulouse", type: "Bar avec jeux" },
  { name: "La Friche Gourmande", address: "Montaudran / Gramont", city: "Toulouse", type: "Bar avec jeux" },
  { name: "La Maison du Vélo", address: "12 Boulevard de Bonrepos", city: "Toulouse", type: "Bar avec jeux" },
  { name: "La Maison Peinte", address: "Chemin de la Marine", city: "Labège", type: "Bar avec jeux" },
  { name: "Le Breughel l'Ancien", address: "30 Rue de la Chaîne", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Le Cacahuète", address: "22 Rue Réclusane", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Le Chorus", address: "44 Rue Jules de Resseguier", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Le Dada", address: "27 Avenue de Muret", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Le Local Jeux", address: "Amicale INSAT (Rangueil)", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Le Petit Voisin", address: "37 Rue Peyrolières", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Le Rooster", address: "19 Rue de la Colombette", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Le Salmanazar", address: "15 Rue de la Balance", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Les Amarres", address: "Port de l'Embouchure", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Les P'tits Tou", address: "1 Rue de l'Écharpe", city: "Toulouse", type: "Bar avec jeux" },
  { name: "O'Briens Irish Pub", address: "6 Rue de la Colombette", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Pop’n CiTea", address: "12 Rue de la Dalbade", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Pub O’Clock", address: "21 Boulevard de Strasbourg", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Rooster & Beer", address: "100 Rue Riquet", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Sauvage Social Pub", address: "11 Place de la Trinité", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Seven Sisters", address: "20 Rue des Sept Troubadours", city: "Toulouse", type: "Bar avec jeux" },
  { name: "The Beer Social Club", address: "Place Marcel Bouilloux-Lafont", city: "Toulouse", type: "Bar avec jeux" },
  { name: "The Black Lion", address: "4 Allées Charles de Fitte", city: "Toulouse", type: "Bar avec jeux" },
  { name: "The Classroom", address: "14 Rue Pargaminières", city: "Toulouse", type: "Bar avec jeux" },
  { name: "The Danu", address: "9 Rue du Pont Guilhemery", city: "Toulouse", type: "Bar avec jeux" },
  { name: "The Dispensary", address: "1 Rue Marthe Varsi", city: "Toulouse", type: "Bar avec jeux" },
  { name: "The Frog & Rosbif", address: "14 Rue de l'Industrie", city: "Toulouse", type: "Bar avec jeux" },
  { name: "The Hopscotch", address: "3 Rue Baour Lormian", city: "Toulouse", type: "Bar avec jeux" },
  { name: "The London Town", address: "14 Rue des Prêtres (Carmes)", city: "Toulouse", type: "Bar avec jeux" },
  { name: "The Thirsty Monk", address: "33 Allées Jules Guesde", city: "Toulouse", type: "Bar avec jeux" },
  { name: "Tower of London", address: "39 Rue de la Colombette", city: "Toulouse", type: "Bar avec jeux" },
];

export const ALL_BARS = [...GAME_BARS, ...BARS_WITH_GAMES].sort((a, b) => a.name.localeCompare(b.name));
