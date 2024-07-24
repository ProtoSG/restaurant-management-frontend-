import { useActiveOrder } from "../../hooks/useActiveOrder"

export default function OrderContainer() {
  const setActiveOrder = useActiveOrder(state => state.setActiveOrder)
  const activeOrder = useActiveOrder(state => state.activeOrder)

  const handleActiveOrder = () => {
    setActiveOrder()
  }

  return (
    <section className={`transition-transform h-full bg-bg-200 p-7 duration-1000 w-full absolute ${!activeOrder ? "translate-x-0" : "translate-x-[200%]"}`} >
      <header className="flex items-center w-full justify-center">
        {/*NOTE: Add SharedButton */}
        <h3 className="font-semibold text-xl">Mesa 01 - Orden #00001</h3>
        {/*NOTE: Add SharedButton */}
      </header>
    </section >
  )
}
