import IconClose from "../../../../../assets/icons/IconClose"
import IconShare from "../../../../../assets/icons/IconShare"
import { useActiveOrder } from "../../../hooks/useActiveOrder"

export default function HeaderOrder() {
  const setActiveOrder = useActiveOrder(state => state.setActiveOrder)

  const handleActiveOrder = () => {
    setActiveOrder()
  }

  return (
    <header className="flex items-center w-full h-11 justify-between">
      <button
        className="border-[1px] border-stroke w-12 h-full flex items-center justify-center rounded-lg text-primary
      hover:bg-primary hover:text-white transition-colors"
      >
        <IconShare />
      </button>
      <h3 className="font-semibold text-xl">Mesa 01 - Orden #00001</h3>
      <button
        className="bg-primary w-12 h-full flex items-center justify-center rounded-lg hover:bg-primary/80 transition-colors"
        onClick={handleActiveOrder}>
        <IconClose />
      </button>
    </header>

  )
}
