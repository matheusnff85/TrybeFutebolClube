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

export interface CreatedMatchInterface {
  id?: number;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean
}