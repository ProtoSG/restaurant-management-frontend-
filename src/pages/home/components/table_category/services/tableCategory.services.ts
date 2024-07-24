import { ApiImpl } from "../../../../../api/api"
import { tableCategoryAdapter } from "../adapters/tableCategory.adapter"

const api = new ApiImpl()

const getTableCategory = async () => {
  const data = await api.get("/table_category")
  return tableCategoryAdapter(data)
}

export { getTableCategory }
