export interface MatchInterface {
  id?: number;
  inProgress?: boolean
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  teamHome?: {
    teamName: string
  };
  teamAway?: {
    teamName: string
  }
}

export interface CreatedMatchInterface {
  id?: number;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean
}

export interface updateMatchGoals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface teste {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  teamHome: {
    teamName: string
  };
  teamAway: {
    teamName: string
  }
}
