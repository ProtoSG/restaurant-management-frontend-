import { Inventory } from "../../../../../models/Inventory.model";
import InventoryBox from "./InventoryBox";
import { ListInventoryProps } from "./ListInventoryContainer";

export default function ListInventoriesByCategory({ inventory }: ListInventoryProps) {
  return (
    <>
      {
        inventory.map((item: Inventory) => (
          <InventoryBox key={item.id} item={item} />
        ))
      }
    </>
  )
}
