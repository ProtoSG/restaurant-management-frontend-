import { useState } from "react";
import ButtonFilled from "../../../../../components/ButtonFilled";
import ButtonOutline from "../../../../../components/ButtonOutline";
import DropImageInput from "./DropImageInput";
import InputItem from "./InputItem";
import SelectInput from "../../../../../components/SelectInput";

export default function FormAddItem() {
  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    if (name === "name") setName(value)
    if (name === "quantity") setQuantity(value)
    if (name === "price") setPrice(value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("FILE", file)
    console.log("NAME", name)
    console.log("QUANTITY", quantity)
    console.log("PRICE", price)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
      <DropImageInput setFile={setFile} />
      <fieldset className="flex flex-col gap-6  col-span-2">
        <SelectInput
          options={[]}
          onChange={() => { }}
          id={1}
        />

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
            placeholder="S/18.00"
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
