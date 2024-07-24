import ErrorInventory from "./components/ErrorInventory"
import ListInventoryContainer from "./components/ListInventoryContainer"
import LoadingInventory from "./components/LoadingInventory"
import useInventory from "./hooks/useInventory"

export default function InventoryContainer() {
  const { inventory, loading, error } = useInventory()
  return (
    <section className="">
      <h3 className="py-8 font-extrabold text-xl">Elegir Plato</h3>
      {
        loading ? <LoadingInventory />
          : error ? <ErrorInventory />
            : <ListInventoryContainer inventory={inventory} />
      }
    </section>
  )
}

