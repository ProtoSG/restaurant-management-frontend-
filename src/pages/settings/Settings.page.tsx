import ButtonFilled from "../../components/ButtonFilled";
import ButtonOutline from "../../components/ButtonOutline";
import Container from "../../components/Container";
import ItemCategoryContainer from "../home/components/item_cateogry/ItemCategoryContainer";
import AddItemContainer from "./components/add_item/AddItemContainer";
import ListInventoryEdit from "./components/edit_inventory/components/ListInvenotryEdit";

export default function Settings() {
  return (
    <main className="w-full flex">
      <div className="px-7 w-full h-screen overflow-y-scroll">
        <header className="w-full py-8">
          <h1 className="font-semibold text-3xl">Configuración</h1>
        </header>
        <Container className="">
          <h3 className="font-semibold text-3xl py-4">Gestión de Productos</h3>
          <ItemCategoryContainer />
          <ListInventoryEdit />
          <div className="h-28 w-full flex gap-4 items-center">
            <ButtonOutline className="w-44" onClick={() => { }}>Cancelar Cambios</ButtonOutline>
            <ButtonFilled className="w-44" onClick={() => { }}>Guardar Cambios</ButtonFilled>
          </div>
        </Container>
      </div>
      <AddItemContainer />
    </main >
  )
}

