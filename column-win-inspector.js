export class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }
  inspect() {
    let currentWinStreakPlayer = 0;
    let currentWinStreakCount = 0;
    for (let i = 0; i < this.column.tokensLength; i++) {
      const el = this.column[i];
      if (currentWinStreakPlayer !== el) {}
    }
  }
}