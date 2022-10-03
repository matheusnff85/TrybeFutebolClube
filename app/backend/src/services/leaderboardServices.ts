import { LeaderboardInterface, LeaderboardMatch } from '../interfaces/leaderboardInterface';
import MatchesModel from '../models/MatchesModel';

export default class LeaderboardServices {
  constructor(private matchesModel: MatchesModel = new MatchesModel()) {}

  public async getHome() {
    const matches = await this.matchesModel.findByProgress(false);
    const homeMatches = LeaderboardServices.getHomeMatches(matches);
    const leaderboard = LeaderboardServices.createLeaderboard(homeMatches as any);
    const ordernedMatches = LeaderboardServices.orderMatches(leaderboard as any);
    return ordernedMatches;
  }

  public async getAway() {
    const matches = await this.matchesModel.findByProgress(false);
    const awayMatches = LeaderboardServices.getAwayMatches(matches);
    const leaderboard = LeaderboardServices.createLeaderboard(awayMatches as any);
    const ordernedMatches = LeaderboardServices.orderMatches(leaderboard as any);
    return ordernedMatches;
  }

  public async getAll() {
    const matches = await this.matchesModel.findByProgress(false);
    const homeMatches = LeaderboardServices.getHomeMatches(matches);
    const awayMatches = LeaderboardServices.getAwayMatches(matches);
    const leaderboard = LeaderboardServices
      .createLeaderboard([...homeMatches as any, ...awayMatches as any]);
    const ordernedMatches = LeaderboardServices.orderMatches(leaderboard as any);
    return ordernedMatches;
  }

  public static getHomeMatches(matches: LeaderboardMatch[]) {
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

  public static getAwayMatches(matches: LeaderboardMatch[]) {
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

  public static orderMatches(matches: LeaderboardInterface[]) {
    const result = matches.map((match) => ({
      ...match,
      goalsBalance: match.goalsFavor - match.goalsOwn,
      efficiency: ((match.totalPoints / (match.totalGames / 3)) * 100).toFixed(2),
    }));
    result.sort((a, b) => (
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || a.goalsOwn - b.goalsOwn
    ));
    return result;
  }
}
