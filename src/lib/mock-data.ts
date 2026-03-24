
export interface Profile {
  id: string;
  username: string;
  avatar_url: string;
  bio?: string;
  location?: string;
  favorite_games?: string[];
  favorite_sports?: string[];
  joined_date: string;
  joined_events?: string[];
  role: 'membre' | 'organisateur' | 'moderateur' | 'administrateur';
  statut_social: 'joueur' | 'organisateur' | 'membre';
  stats: {
    sessions_played: number;
    karma: number;
    sessions_hosted: number;
  };
  nom?: string;
  prenom?: string;
  genre?: string;
  etudiant?: boolean;
  ville?: string;
  departement?: string;
  region?: string;
  pays?: string;
  telephone?: string;
  email?: string;
  langues_parlees?: string;
  organisateur_opt?: boolean;
  vegetarien?: boolean;
  vegan?: boolean;
  cherche_emploi?: boolean;
  cherche_logement?: boolean;
  cherche_covoiturage?: boolean;
  sport_bio?: string;
  musique?: string;
  jeux_bio?: string;
  cuisine?: string;
  danse?: string;
  loisirs_divers?: string;
  film?: string;
  programmes_tele?: string;
  livres?: string;
  voyages?: string;
  animaux?: string;
  jaime?: string;
  jenaimepas?: string;
  environnement?: string;
  centres_interets?: string;
  est_actif?: boolean;
  derniere_connexion?: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  min_players: number;
  max_players: number;
  category: string;
}

export interface Event {
  id: string;
  creator_id: string;
  game_id?: string;
  sport_name?: string;
  title: string;
  description: string;
  cover_url: string;
  location_name: string;
  address: string;
  event_date: string;
  start_time: string;
  end_time: string;
  max_participants: number;
  created_at: string;
}

export const MOCK_PROFILES: Profile[] = [
  { 
    id: 'u1', 
    username: 'Lucas_Admin', 
    avatar_url: 'https://picsum.photos/seed/64/200/200',
    nom: 'Dupont',
    prenom: 'Lucas',
    role: 'administrateur',
    statut_social: 'organisateur',
    bio: "Administrateur de Toulouse Play Games. Passionné de jeux de stratégie et de randonnée.",
    location: "Toulouse, Saint-Cyprien",
    ville: 'Toulouse',
    departement: '31',
    region: 'Occitanie',
    pays: 'France',
    email: 'lucas.admin@toulouseplay.com',
    genre: 'homme',
    etudiant: false,
    favorite_games: ["Catan", "7 Wonders"],
    favorite_sports: ["Football", "Course à pied"],
    joined_date: "Janvier 2024",
    joined_events: ['e2', 'e3'],
    est_actif: true,
    derniere_connexion: '2024-05-20T14:30:00Z',
    stats: {
      sessions_played: 12,
      karma: 150,
      sessions_hosted: 10
    }
  },
  { 
    id: 'u2', 
    username: 'Sophie_Modo', 
    avatar_url: 'https://picsum.photos/seed/65/200/200', 
    role: 'moderateur',
    statut_social: 'membre',
    joined_date: "Mars 2024", 
    est_actif: true,
    derniere_connexion: '2024-05-19T10:15:00Z',
    stats: { sessions_played: 5, karma: 50, sessions_hosted: 1 } 
  },
  { 
    id: 'u3', 
    username: 'ToulouseMeeple', 
    avatar_url: 'https://picsum.photos/seed/avatar-3/200/200', 
    role: 'membre',
    statut_social: 'joueur',
    joined_date: "Février 2024", 
    est_actif: true,
    derniere_connexion: '2024-05-18T22:00:00Z',
    stats: { sessions_played: 25, karma: 110, sessions_hosted: 15 } 
  },
];

export const MOCK_GAMES: Game[] = [
  { id: 'g1', title: 'Catan', description: 'Devenez la force dominante sur l\'île de Catan.', min_players: 3, max_players: 4, category: 'Plateau' },
  { id: 'g2', title: '7 Wonders', description: 'Dirigez l\'une des sept grandes cités.', min_players: 2, max_players: 7, category: 'Cartes' },
  { id: 'g3', title: 'Dungeons & Dragons', description: 'Narration collaborative.', min_players: 2, max_players: 6, category: 'JdR' },
  { id: 'g4', title: 'Loups-Garous', description: 'Un jeu de bluff et de déduction.', min_players: 8, max_players: 18, category: 'Ambiance' },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    creator_id: 'u1', 
    game_id: 'g1',
    title: 'Sortie Catan au Capitole',
    description: 'Je cherche 3 colons courageux pour une session épique de Catan en plein centre ville. Modification possible car l\'événement est dans le futur !',
    cover_url: 'https://picsum.photos/seed/event1/800/400',
    location_name: "Café de la Concorde",
    address: "17 Rue de la Concorde, 31000 Toulouse",
    event_date: '2026-12-15',
    start_time: '14:00',
    end_time: '17:00',
    max_participants: 4,
    created_at: '2024-05-01T10:00:00Z',
  },
  {
    id: 'e4',
    creator_id: 'u1',
    game_id: 'g4',
    title: 'Nuit des Loups-Garous (Passé)',
    description: 'Une session mémorable. Événement passé : vous ne pouvez que le DUPLIQUER pour organiser la prochaine nuit !',
    cover_url: 'https://picsum.photos/seed/werewolf/800/400',
    location_name: "La Taverne du Troll",
    address: "11 Av. Maurice Hauriou, 31000 Toulouse",
    event_date: '2023-10-31',
    start_time: '21:00',
    end_time: '00:00',
    max_participants: 15,
    created_at: '2023-10-01T15:00:00Z',
  },
  {
    id: 'e2',
    creator_id: 'u2',
    sport_name: 'Football',
    title: 'Five entre amis - Urban Soccer',
    description: 'On cherche 2 personnes pour compléter un Five ce soir. Niveau débutant/intermédiaire accepté !',
    cover_url: 'https://picsum.photos/seed/football/800/400',
    location_name: "Urban Soccer Toulouse",
    address: "2 Rue de l'Égalité, 31200 Toulouse",
    event_date: '2024-06-18',
    start_time: '19:00',
    end_time: '20:30',
    max_participants: 10,
    created_at: '2024-05-10T15:00:00Z',
  },
  {
    id: 'e3',
    creator_id: 'u3',
    game_id: 'g2',
    title: 'Soirée 7 Wonders & Bières',
    description: 'Venez construire vos merveilles autour d\'une bonne bière artisanale chez Baraka Jeux.',
    cover_url: 'https://picsum.photos/seed/boardgames/800/400',
    location_name: "Baraka Jeux (Gare)",
    address: "1 Bd de la Gare, 31500 Toulouse",
    event_date: '2024-06-20',
    start_time: '20:00',
    end_time: '23:00',
    max_participants: 7,
    created_at: '2024-05-12T09:00:00Z',
  },
];
