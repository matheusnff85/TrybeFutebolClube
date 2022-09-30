export interface MatchInterface {
  id?: number;
  inProgress?: boolean
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  teamHome?: object;
  teamAway?: object;
}
