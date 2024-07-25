import FormAddItem from "./components/FormAddItem"
import HeaderAddItem from "./components/HeaderAddItem"

export default function AddItemContainer() {
  return (
    <dialog id="dialog-add-item" className="relative w-[618px] p-10 text-white bg-bg-100 m-auto backdrop:backdrop-blur-2xl rounded-xl" >
      <HeaderAddItem />
      <FormAddItem />
    </dialog >
  )
}
