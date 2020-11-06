import { Column } from "./column";

export class RowWinInspector {
  constructor(columns) {
    this.columns = [new Column(), new Column(), new Column(), new Column()];
  }
  inspect() {
    for (let i = 0; i < 5; i++) {
      const el = this.columns[i];
      
    }
  }
}