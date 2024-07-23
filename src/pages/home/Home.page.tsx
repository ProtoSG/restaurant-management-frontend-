import Header from "./components/header/Header.home";
import InventoryContainer from "./components/inventory/InventoryContainer";
import ItemCategoryContainer from "./components/item_cateogry/ItemCategoryContainer";

export default function Home() {
  return (
    <main className="w-full px-7">
      <Header />
      <ItemCategoryContainer />
      <InventoryContainer />
    </main>
  )
}

