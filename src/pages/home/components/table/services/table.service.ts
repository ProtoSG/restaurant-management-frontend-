import { ApiImpl } from "../../../../../api/api";
import { tableAdapter } from "../adapters/table.adapter";

const apiImpl = new ApiImpl()

const getTable = async () => {
  const data = await apiImpl.get("/tables")
  return tableAdapter(data)
}

export { getTable }
