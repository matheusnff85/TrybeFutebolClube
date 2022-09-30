import { MatchInterface } from '../../interfaces/matchInterface';

const allMatches: MatchInterface[] = [
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
    homeTeam: 15,
    homeTeamGoals: 2,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'Bragantino'
    },
    teamAway: {
      teamName: 'Botafogo'
    }
  },
  {
    id: 3,
    homeTeam: 7,
    homeTeamGoals: 5,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: 'Flamengo'
    },
    teamAway: {
      teamName: 'Palmeiras'
    }
  },
  {
    id: 4,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 1,
    awayTeamGoals: 4,
    inProgress: false,
    teamHome: {
      teamName: 'Avai'
    },
    teamAway: {
      teamName: 'Cruzeiro'
    }
  },
  {
    id: 5,
    homeTeam: 13,
    homeTeamGoals: 1,
    awayTeam: 10,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: 'Fluminense'
    },
    teamAway: {
      teamName: 'Vasco'
    }
  }
];

export { allMatches };
