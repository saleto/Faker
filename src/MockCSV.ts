import * as faker from "faker";
import mapValues from "lodash/mapValues";
import values from "lodash/values";

export type Dict<T> = {
  [key: string]: T;
};

export class MockCSV<T extends Dict<any>> {
  rows: T[];
  data: T;
  rowCount: number;

  constructor(data: T, rowCount: number) {
    this.data = data;
    this.rowCount = rowCount;
    this.rows = [];

    for (var i = 0; i < rowCount; i++) {
      const mapped = mapValues(data, faker.fake);
      this.rows.push(mapped as T);
      values(mapped).join(",");
    }
  }

  // For mocking very large CSVs this may
  // not be suitable as you could run out of memory
  // and a stream / iterator based
  // approach might be necessary
  toString() {
    const keys = Object.keys(this.data);
    const headers = keys.join(",");
    const strRows = [headers];

    for (var i = 0; i < this.rowCount; i++) {
      strRows.push(values(this.rows[i]).join(","));
    }

    return strRows.join("\n") + "\n";
  }
}
