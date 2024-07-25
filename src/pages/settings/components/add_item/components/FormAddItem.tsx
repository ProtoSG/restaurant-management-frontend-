import { useEffect, useState } from "react";
import ButtonFilled from "../../../../../components/ButtonFilled";
import ButtonOutline from "../../../../../components/ButtonOutline";
import DropImageInput from "./DropImageInput";
import InputItem from "./InputItem";
import { useItemCategoryId } from "../../../../home/hooks/useItemCategoryId";
import { ItemCategory } from "../../../../../models/ItemCategory.model";
import { Inventory, InventoryNative } from "../../../../../models/Inventory.model";
import { uploadFile } from "../../../../../firebase/config";

export default function FormAddItem() {
  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const idItemCategory = useItemCategoryId(state => state.id)
  const valueItemCategory = useItemCategoryId(state => state.value)

  const [errorQuantity, setErrorQuantity] = useState<string>("")


  const handleChange = (e: any) => {
    const { name, value } = e.target
    console.log(e.target.value)
    const newValue = e.target.value
    if (value.startsWith(' ')) return
    if (name === "name") setName(value)
    if (name === "quantity") {
      const num = Number(value)
      if (isNaN(num)) return
      setQuantity(num)
    }
    if (name === "price") setPrice(parseFloat(value))
    console.log("QUANTITY", quantity)
  }
  // useEffect(() => {
  //   if (quantity === 0) {
  //     setErrorQuantity("Debe ingresar un valor mayor a cero")
  //     return
  //   }
  // }, [quantity])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!file) return

    // const url = await uploadFile(file, valueItemCategory)
    const url = "prueba"
    if (!url) return

    const newItem: InventoryNative = {
      name: name,
      quantity: quantity,
      price: price,
      image: url,
      item_category_id: idItemCategory
    }

    console.log(newItem)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
      <DropImageInput setFile={setFile} />
      <fieldset className="flex flex-col gap-6  col-span-2">
        <InputItem
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Nombre del producto..."
        />
        <fieldset className="flex gap-4">
          <InputItem
            name="quantity"
            type="text"
            onChange={handleChange}
            placeholder="20"
          />
          <InputItem
            name="price"
            type="text"
            onChange={handleChange}
            placeholder="18.00"
          />
        </fieldset>
        <div className="flex justify-end gap-4">
          <ButtonOutline
            onClick={() => { }}
            className="w-full"
            type="button"
          >
            Cancelar
          </ButtonOutline>
          <ButtonFilled
            onClick={() => { }}
            className="w-full"
            type="submit"
          >
            Agregar
          </ButtonFilled>
        </div>
      </fieldset>
    </form>

  )
}
