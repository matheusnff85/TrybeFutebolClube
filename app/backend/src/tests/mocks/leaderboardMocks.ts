const leaderboard = [
  {
    name: 'Flamengo',
    totalPoints: 6,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 18,
    goalsOwn: 2,
    totalGames: 2,
    goalsBalance: 16,
    efficiency: '100.00'
  },
  {
    name: 'Corinthians',
    totalPoints: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 3,
    goalsOwn: 0,
    totalGames: 1,
    goalsBalance: 3,
    efficiency: '100.00'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 0,
    totalGames: 1,
    goalsBalance: 1,
    efficiency: '100.00'
  },
  {
    name: 'São Paulo',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Internacional',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Cruzeiro',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Grêmio',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Santos',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Real Brasília',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Botafogo',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Bahia',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'São José-SP',
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 0,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: -1,
    efficiency: '0.00'
  },
  {
    name: 'Napoli-SC',
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 0,
    goalsOwn: 3,
    totalGames: 1,
    goalsBalance: -3,
    efficiency: '0.00'
  },
  {
    name: 'Palmeiras',
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 2,
    goalsOwn: 8,
    totalGames: 1,
    goalsBalance: -6,
    efficiency: '0.00'
  },
  {
    name: 'Minas Brasília',
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 0,
    goalsOwn: 10,
    totalGames: 1,
    goalsBalance: -10,
    efficiency: '0.00'
  }
];

const finishedMatches = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'São Paulo'
    },
    teamAway: {
      teamName: 'Grêmio'
    }
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'Internacional'
    },
    teamAway: {
      teamName: 'Santos'
    }
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: 'Corinthians'
    },
    teamAway: {
      teamName: 'Napoli-SC'
    }
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: 'Botafogo'
    },
    teamAway: {
      teamName: 'Bahia'
    }
  },
  {
    id: 5,
    homeTeam: 7,
    homeTeamGoals: 10,
    awayTeam: 10,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: 'Flamengo'
    },
    teamAway: {
      teamName: 'Minas Brasília'
    }
  },
  {
    id: 6,
    homeTeam: 5,
    homeTeamGoals: 1,
    awayTeam: 13,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'Cruzeiro'
    },
    teamAway: {
      teamName: 'Real Brasília'
    }
  },
  {
    id: 7,
    homeTeam: 12,
    homeTeamGoals: 2,
    awayTeam: 7,
    awayTeamGoals: 8,
    inProgress: false,
    teamHome: {
      teamName: 'Palmeiras'
    },
    teamAway: {
      teamName: 'Flamengo'
    }
  },
  {
    id: 8,
    homeTeam: 15,
    homeTeamGoals: 0,
    awayTeam: 1,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'São José-SP'
    },
    teamAway: {
      teamName: 'Avaí/Kindermann'
    }
  },
];

const homeLeaderboard = [
  {
    name: 'Flamengo',
    totalPoints: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 10,
    goalsOwn: 0,
    totalGames: 1,
    goalsBalance: 10,
    efficiency: '100.00'
  },
  {
    name: 'Corinthians',
    totalPoints: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 3,
    goalsOwn: 0,
    totalGames: 1,
    goalsBalance: 3,
    efficiency: '100.00'
  },
  {
    name: 'São Paulo',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Internacional',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Cruzeiro',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Botafogo',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'São José-SP',
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 0,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: -1,
    efficiency: '0.00'
  },
  {
    name: 'Palmeiras',
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 2,
    goalsOwn: 8,
    totalGames: 1,
    goalsBalance: -6,
    efficiency: '0.00'
  }
];

const awayLeaderboard = [
  {
    name: 'Flamengo',
    totalPoints: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 8,
    goalsOwn: 2,
    totalGames: 1,
    goalsBalance: 6,
    efficiency: '100.00'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 0,
    totalGames: 1,
    goalsBalance: 1,
    efficiency: '100.00'
  },
  {
    name: 'Grêmio',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Santos',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Real Brasília',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 1,
    goalsOwn: 1,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Bahia',
    totalPoints: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    totalGames: 1,
    goalsBalance: 0,
    efficiency: '33.33'
  },
  {
    name: 'Napoli-SC',
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 0,
    goalsOwn: 3,
    totalGames: 1,
    goalsBalance: -3,
    efficiency: '0.00'
  },
  {
    name: 'Minas Brasília',
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 0,
    goalsOwn: 10,
    totalGames: 1,
    goalsBalance: -10,
    efficiency: '0.00'
  }
];

export { leaderboard, finishedMatches, homeLeaderboard, awayLeaderboard };