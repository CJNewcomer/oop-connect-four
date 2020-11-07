import { Column } from "./column";

export class RowWinInspector {
  constructor(columns) {
    this.columns = columns;
  }
  inspect() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 6; j++) {
        const row = []
        for (let k = 0; k < 4; k++) {
          const column = columns[i + k];
          row.push(column.tokens[j]);
        }
        
      }
      
    }
  }
}