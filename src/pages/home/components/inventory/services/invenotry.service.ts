import { ApiImpl } from "../../../../../api/api"
import { inventoryAdapter } from "../adapter/inventory.adapter"

const apiImpl = new ApiImpl()

const getInventory = async () => {
  const response = await apiImpl.get('/inventory')
  return inventoryAdapter(response)
}

export { getInventory }
