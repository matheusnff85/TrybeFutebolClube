import { TeamInterface } from '../../interfaces/teamInterface';

const allTeams: TeamInterface[] = [
  {
    id: 1,
    teamName: 'Flamengo'
  },
  {
    id: 2,
    teamName: 'Vasco'
  },
  {
    id: 3,
    teamName: 'Botafogo'
  },
  {
    id: 4,
    teamName: 'Manchester United'
  },
];

const oneTeam: TeamInterface = {
  id: 1, teamName: 'Flamengo'
}

export { allTeams, oneTeam };
