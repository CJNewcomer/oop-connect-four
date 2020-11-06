export class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }
  inspect() {
    let currentWinStreakPlayer = 0;
    let currentWinStreakCount = 0;
    for (let i = this.column.tokensLength - 1; i >= 0; i--) {
      const el = this.column.tokens[i];
      if (currentWinStreakCount === 4) {
        return currentWinStreakPlayer;
      }
      if (!el) return 0;
      if (currentWinStreakPlayer !== el) {
        currentWinStreakPlayer = el;
        currentWinStreakCount = 1;
      }
      else {
        currentWinStreakCount++;
      }
    }
  }
}
