import { Column } from "./column";

export class RowWinInspector {
  constructor(columns) {
    this.columns = [new Column(), new Column(), new Column(), new Column()];
  }
}