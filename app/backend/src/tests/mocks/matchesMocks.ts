import Matches from '../../database/models/Matches';
import { MatchInterface, CreatedMatchInterface } from '../../interfaces/matchInterface';

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

const inProgressMatches: MatchInterface[] = [
  {
    id: 3,
    homeTeam: 7,
    homeTeamGoals: 5,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'Flamengo'
    },
    teamAway: {
      teamName: 'Palmeiras'
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

const finishedMatches: MatchInterface[] = [
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
  }
];

const newMatch: CreatedMatchInterface = {
  homeTeam: 5,
  awayTeam: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true
};

const createdMatch: CreatedMatchInterface = {
  id: 1,
  homeTeam: 5,
  awayTeam: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true
}

export { allMatches, inProgressMatches, finishedMatches, newMatch, createdMatch };
