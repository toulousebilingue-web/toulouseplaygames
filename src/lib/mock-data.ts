// src/lib/mock-data.ts

export const MOCK_EVENTS = [
  {
    id: "1",
    title: "Soirée Jeux de Société",
    date: "2024-03-20",
    location: "Le Bar à Jeux",
    description: "Une super soirée !",
    category: "Jeux de plateau"
  }
];

// src/lib/mock-data.ts
export const MOCK_GAMES = [
  { id: "1", title: "Catan", description: "Stratégie", min_players: 3, max_players: 4 },
  { id: "2", title: "Dixit", description: "Imagination", min_players: 3, max_players: 6 },
  { id: "3", title: "7 Wonders", description: "Civilisation", min_players: 2, max_players: 7 },
  { id: "4", title: "Uno", description: "Cartes", min_players: 2, max_players: 10 },
  // Ajoute autant de jeux que tu veux ici
];

export const MOCK_PROFILES = [
  {
    id: "1",
    name: "Jean Dupont",
    username: "Jean D.",
    email: "jean@example.com",
    role: "user",
    status: "active",
    location: "Toulouse",
    bio: "Grand fan de jeux de stratégie et de foot le dimanche !",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    favorite_sports: ["Football", "Padel"],
    favorite_games: ["Catan", "7 Wonders"],
    joined_events: ["1"],
    stats: {
      sessions_played: 12,
      karma: 95,
      sessions_hosted: 4
    }
  },
  {
    id: "2",
    name: "Marie Courtois",
    username: "Marie C.",
    email: "marie@example.com",
    role: "user",
    status: "active",
    location: "Blagnac",
    bio: "Toujours partante pour une partie de Dixit !",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    favorite_sports: ["Tennis", "Yoga"],
    favorite_games: ["Dixit", "Azul"],
    joined_events: [],
    stats: {
      sessions_played: 8,
      karma: 100,
      sessions_hosted: 1
    }
  }
];

export const archivedGames = [];
export const mockStats = { totalUsers: 1, activeGames: 1 };