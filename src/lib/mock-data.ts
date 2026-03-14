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

export const MOCK_GAMES = [
  {
    id: "1",
    title: "Catan",
    description: "Jeu de stratégie",
    image: "/games/catan.jpg"
  }
];

// On garde aussi ceux-là au cas où tes autres pages en auraient besoin
export const archivedGames = [];
export const mockStats = { totalUsers: 0, activeGames: 0 };