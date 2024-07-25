import { useActiveOrder } from "../../hooks/useActiveOrder"
import HeaderOrder from "./components/HeaderOrder"
import ListOrder from "./components/ListOrder"
import PayOrder from "./components/PayOrder"

export default function OrderContainer() {
  const activeOrder = useActiveOrder(state => state.activeOrder)

  return (
    <section className={`transition-transform w-full h-full bg-bg-200 p-7 duration-700 absolute ${activeOrder ? "translate-x-0" : "translate-x-[200%]"}`} >
      <HeaderOrder />
      <main className="flex h-[98%] py-4 flex-col ">
        <ListOrder />
        <PayOrder />
      </main>
    </section >
  )
}
