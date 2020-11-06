import { Column } from './column.js';

export class Game {
  constructor(player1Name, player2Name) {
    this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.currentPlayer = 1;
    // console.log(this.columns);
  }
  getName() {
    return `${this.player1Name} vs. ${this.player2Name}`;
  }
  playInColumn(column) {
    this.columns[column].add(this.currentPlayer);
    if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
    } else {
        this.currentPlayer = 1;
    }
  }
  getTokenAt(row, column) {
    return this.columns[column].getTokenAt(row);
  }
  isColumnFull(column) {
    return this.columns[column].isFull();
  }
}
