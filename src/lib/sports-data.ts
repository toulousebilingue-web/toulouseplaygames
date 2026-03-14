import { 
  Trophy, Users, Zap, Heart, Bike, Waves, Mountain, 
  Wind, Target, Brain, Activity, Dumbbell, Car, Swords 
} from "lucide-react";

export const SPORTS_DATA = [
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
      "Cyclisme sur route", "VTT", "BMX (Race & Freestyle)", "Cyclisme sur piste", "Trial"
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

// Génère une liste plate de tous les sports pour les sélecteurs
export const ALL_SPORTS = SPORTS_DATA.flatMap(cat => 
  cat.items.map(name => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name: name
  }))
);