import { Inventory } from "../../../../models/Inventory.model"
import useInventory from "./hooks/useInventory"

export default function InventoryContainer() {
  const { inventory, loading, error } = useInventory()
  console.log(inventory)
  return (
    <section className="">
      <h3 className="py-8 font-extrabold text-xl">Elegir Plato</h3>
      <div className="grid grid-cols-3 justify-between gap-10">
        {
          inventory.map((item: Inventory) => (
            <article
              key={item.id}
              className="h-64 w-48 mx-auto"
            >
              <img src={item.image} alt={item.name} />
              <div className="bg-bg-200 h-56 gap-3 px-6 justify-end py-4 rounded-2xl flex flex-col items-center">
                <h1 className="text-pretty text-center">{item.name}</h1>
                <span>S/ {item.price.toFixed(2)}</span>
                <small className="text-text">{item.quantity} Platos Disponibles</small>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

