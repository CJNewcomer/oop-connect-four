export class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }
  inspect() {
    let currentWinStreakPlayer = 0;
    let currentWinStreakCount = 0;
    for (let i = 0; i < this.column.tokensLength; i++) {
      const el = this.column.tokens[i];
      if (!el) return 0;
      else if (currentWinStreakPlayer !== el) {
        currentWinStreakPlayer = el;
        currentWinStreakCount = 1;
      } else {
        currentWinStreakCount ++;
        if (currentWinStreakCount === 4) {
          return currentWinStreakPlayer;
        }
      }
    }
  }
}