import AddItem from "./AddItem";
import BoxItemEdit from "./BoxItemEdit";

export default function ListInventoryEdit() {
  return (
    <div className="py-8 flex gap-4">
      <AddItem />
      <BoxItemEdit />
    </div>
  )
}
