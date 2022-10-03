import { LeaderboardMatchInterface } from '../interfaces/matchInterface';
import { LeaderboardInterface } from '../interfaces/leaderboardInterface';
import MatchesModel from '../models/MatchesModel';

export default class LeaderboardServices {
  constructor(private matchesModel: MatchesModel = new MatchesModel()) {}

  public static getHomeMatches(matches: LeaderboardMatchInterface[]) {
    const homeMatches = matches.forEach((match) => {
      let teamScore = { wins: 0, losses: 0, draws: 0, points: 0 };
      if (match.homeTeamGoals === match.awayTeamGoals) {
        teamScore = { ...teamScore, points: 1, draws: 1 };
      } else if (match.homeTeamGoals > match.awayTeamGoals) {
        teamScore = { ...teamScore, points: 3, wins: 1 };
      } else { teamScore = { ...teamScore, losses: 1 }; }
      return {
        name: match.teamHome.teamName,
        totalPoints: teamScore.points,
        totalVictories: teamScore.wins,
        totalDraws: teamScore.draws,
        totalLosses: teamScore.losses,
        goalsFavor: match.homeTeamGoals,
        goalsOwn: match.awayTeamGoals,
      } as LeaderboardInterface;
    });
    return homeMatches;
  }

  public static getAwayMatches(matches: LeaderboardMatchInterface[]) {
    const awayMatches = matches.forEach((match) => {
      let teamScore = { wins: 0, losses: 0, draws: 0, points: 0 };
      if (match.awayTeamGoals === match.homeTeamGoals) {
        teamScore = { ...teamScore, points: 1, draws: 1 };
      } else if (match.awayTeamGoals > match.homeTeamGoals) {
        teamScore = { ...teamScore, points: 3, wins: 1 };
      } else { teamScore = { ...teamScore, losses: 1 }; }
      return {
        name: match.teamAway.teamName,
        totalPoints: teamScore.points,
        totalVictories: teamScore.wins,
        totalDraws: teamScore.draws,
        totalLosses: teamScore.losses,
        goalsFavor: match.awayTeamGoals,
        goalsOwn: match.homeTeamGoals,
      } as LeaderboardInterface;
    });
    return awayMatches;
  }

  public static createLeaderboard(matches: LeaderboardInterface[]) {
    const list = [] as LeaderboardInterface[];
    matches.forEach((match) => {
      const matchIndex = list.findIndex((current) => current.name === match.name);
      if (matchIndex === -1) list.push({ ...match, totalGames: 1 });
      else {
        list[matchIndex].totalPoints += match.totalPoints;
        list[matchIndex].totalVictories += match.totalVictories;
        list[matchIndex].totalDraws += match.totalDraws;
        list[matchIndex].totalLosses += match.totalLosses;
        list[matchIndex].goalsFavor += match.goalsFavor;
        list[matchIndex].goalsOwn += match.goalsOwn;
        list[matchIndex].totalGames += 1;
      }
    });
    return list;
  }
}
