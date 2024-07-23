import { ApiImpl } from "../../../../../api/api"
import { itemCategoryAdapter } from "../adapters/itemCategory.adapter"

const apiClitent = new ApiImpl()

const getCategory = async () => {
  const data = await apiClitent.get('/item_category')
  return itemCategoryAdapter(data)
}

export { getCategory }
