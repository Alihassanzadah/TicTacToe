class Game {
  constructor() {
    this.inProgress = true;
    this.winner = null;
    this.currentTurn = Game.O; // 'O' or 'X'
    this.movesMade = 0;
    this.Squares = new Array(9).fill().map( s => new square() );

  }
}
Game.O = 'O';
Game.X = 'X';
