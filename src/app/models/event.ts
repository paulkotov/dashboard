export class Event {
  idEvent: string;
  team1: Team;
  team2: Team;
  idGame: string;
  player1: Player;
  player2: Player;
  name: string;
  description: string;
  dateTimeStart: string;
  isAuthomaticallyStart: string;
  dateStartBetting: string;
  dateStopBetting: string;
  favourite: string;
  probabilityOfFavourite: string;
  streamLink: string;
  betFrequency: string;
  MaxSingleBetOfTotal: string;
  isActive: string;
  winnerTeam: Team;
  winnerPlayer: Player;
  color: string;
  isFavourite: string;
}

class Player {
  idPlayer: string;
  name: string;
}

class Team {
  idTeam: string;
  name: string;
  logoURL: string;
}
