import { Inventory } from "../../../../../models/Inventory.model"

interface InventoryBoxProps {
  item: Inventory
}

export default function InventoryBox({ item }: InventoryBoxProps) {
  return (
    <article
      key={item.id}
      className="h-64 w-48 mx-auto relative flex items-end transition-all hover:scale-105 hover:cursor-pointer hover:shadow-2xl"
    >
      <div className="size-32 absolute top-0 left-1/2 -translate-x-1/2 ">
        <img src={item.image} alt={item.name} className="size-full" />
      </div>
      <div className="bg-bg-200 h-56 gap-2 px-6 text-sm justify-end pb-2 rounded-2xl flex flex-col items-center">
        <h1 className="text-pretty text-center font-semibold">{item.name}</h1>
        <span>S/ {item.price.toFixed(2)}</span>
        <span className="text-text">{item.quantity} Platos Disponibles</span>
      </div>
    </article>
  )
}

