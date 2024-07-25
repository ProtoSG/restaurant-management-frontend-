import ButtonFilled from "../../../../../components/ButtonFilled";
import ButtonOutline from "../../../../../components/ButtonOutline";
import DropImageInput from "./DropImageInput";
import InputItem from "./InputItem";

export default function FormAddItem() {
  return (
    <form className="grid grid-cols-3 gap-4">
      <DropImageInput />
      <fieldset className="flex flex-col gap-6  col-span-2">
        <InputItem placeholder="Nombre del producto..." />
        <fieldset className="flex gap-4">
          <InputItem placeholder="20" />
          <InputItem placeholder="S/18.00" />
        </fieldset>
        <div className="flex justify-end gap-4">
          <ButtonOutline
            onClick={() => { }}
            className="w-full"
          >
            Cancelar
          </ButtonOutline>
          <ButtonFilled
            onClick={() => { }}
            className="w-full"
          >
            Agregar
          </ButtonFilled>
        </div>
      </fieldset>
    </form>

  )
}
