import { Column } from './column.js';
import { ColumnWinInspector } from './column-win-inspector.js';

export class Game {
  constructor(player1Name, player2Name) {
    this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.currentPlayer = 1;
    this.winnerNumber = 0;
    // console.log(this.columns);
  }
  getName() {
    if (this.winnerNumber === 1) {
      return `${this.player1Name} wins!`;
    } else if (this.winnerNumber === 2) {
        return `${this.player2Name} wins!`;
    }
    if (this.winnerNumber === 3) {
      return `${this.player1Name} ties with ${this.player2Name}!`;
    }
    return `${this.player1Name} vs. ${this.player2Name}`;
  }
  playInColumn(column) {
    this.columns[column].add(this.currentPlayer);
    if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
    } else {
        this.currentPlayer = 1;
    }
    if (this.checkForTie()) {
      this.winnerNumber = 3;
    }
    this.checkForColumnWin();
  }
  getTokenAt(row, column) {
    return this.columns[column].getTokenAt(row);
  }
  isColumnFull(column) {
    if (this.winnerNumber === 1 || this.winnerNumber === 2) {
      return true;
    }
    return this.columns[column].isFull();
  }
  checkForTie() {
    for (let i = 0; i < this.columns.length; i++) {
      if (!this.columns[i].isFull()) {
        return false;
      } 
    }
    return true;
  }
  checkForColumnWin() {
    
  }
}
