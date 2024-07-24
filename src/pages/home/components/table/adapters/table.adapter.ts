import { Table } from "../../../../../models/Table.model";

export const tableAdapter = (data: any[]): Table[] => {
  return data.map((item => Table.fromJson(item)))
}
