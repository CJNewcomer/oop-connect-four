export class Column {
  constructor() {
    this.tokens = [null, null, null, null, null, null];
    this.tokensLength = 6;
  }
  add(playerNumber) {
    for (let i = this.tokens.length - 1; i >= 0; i--) {
      let token = this.tokens[i];
      if (token === null) {
        this.tokens[i] = playerNumber;
        return;
      }
    }
  }
  getTokenAt(row) {
    return this.tokens[row];
  }
  isFull() {
    if (this.tokens[0] !== null) return true;
    else return false;
  }
}
