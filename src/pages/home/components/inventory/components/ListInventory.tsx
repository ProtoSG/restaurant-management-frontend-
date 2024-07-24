import { Inventory } from "../../../../../models/Inventory.model"
import { useItemCategoryId } from "../../../hooks/useItemCategoryId"
import { useSearchDish } from "../../../hooks/useSearchItem"

export interface ListInventoryProps {
  inventory: Inventory[]
}





export default function ListInventory({ inventory }: ListInventoryProps) {
  const idItemCategory = useItemCategoryId(state => state.id)
  const inventoriesSearch = useSearchDish(state => state.inventories)
  const inventoryForCategory = inventory.filter(item => item.category.id === idItemCategory)

  return (
    <div className="grid grid-cols-3 justify-between gap-10 pb-8">
      {
        inventoriesSearch.length !== 0
          ? <InventoriesSearch inventory={inventoriesSearch} />
          : <InventoriesByCategory inventory={inventoryForCategory} />
      }
    </div>

  )
}

