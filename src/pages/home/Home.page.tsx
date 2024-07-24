import Header from "./components/header/Header.home";
import InventoryContainer from "./components/inventory/InventoryContainer";
import ItemCategoryContainer from "./components/item_cateogry/ItemCategoryContainer";
import TableContainer from "./components/table/TableContainer";
import TableCategoryContainer from "./components/table_category/TableCategoryContainer";
import OrderContainer from "./components/order/OrderContainer"

export default function Home() {
  return (
    <main className="w-full flex">
      <div className="px-7 w-full h-screen overflow-y-scroll">
        <Header />
        <ItemCategoryContainer />
        <InventoryContainer />
      </div>
      <aside className="bg-bg-200 h-screen overflow-x-hidden overflow-y-scroll relative rounded-2xl min-w-[396px] flex flex-col items-center ">
        <section className="p-7 h-full">
          <TableCategoryContainer />
          <TableContainer />
        </section>
        <OrderContainer />
      </aside>
    </main>
  )
}

