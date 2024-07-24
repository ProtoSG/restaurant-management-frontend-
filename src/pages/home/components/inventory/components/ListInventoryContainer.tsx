import { Inventory } from "../../../../../models/Inventory.model"
import { useItemCategoryId } from "../../../hooks/useItemCategoryId"
import { useSearchDish } from "../../../hooks/useSearchItem"
import ListInventoriesByCategory from "./ListInventoryByCategory"
import ListInventoriesSearch from "./ListInventorySearch"

export interface ListInventoryProps {
  inventory: Inventory[]
}

export default function ListInventoryContainer({ inventory }: ListInventoryProps) {
  const idItemCategory = useItemCategoryId(state => state.id)
  const inventoriesSearch = useSearchDish(state => state.inventories)
  const inventoryForCategory = inventory.filter(item => item.category.id === idItemCategory)

  return (
    <div className="grid grid-cols-3 justify-between gap-10 pb-8">
      {
        inventoriesSearch.length !== 0
          ? <ListInventoriesSearch inventory={inventoriesSearch} />
          : <ListInventoriesByCategory inventory={inventoryForCategory} />
      }
    </div>

  )
}

