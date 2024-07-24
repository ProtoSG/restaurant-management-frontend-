import { Table } from "../../../../../models/Table.model"
import { useActiveOrder } from "../../../hooks/useActiveOrder"
import { useTableCategoryId } from "../../../hooks/useTableCategoryId"

interface ListTablesProps {
  tables: Table[]
}

export default function ListTables({ tables }: ListTablesProps) {
  const idTableCategory = useTableCategoryId(state => state.id)
  const tablesFilter = tables.filter(table => table.category.id === idTableCategory)
  const setActiveOrder = useActiveOrder(state => state.setActiveOrder)
  const setOrderId = useActiveOrder(state => state.setOrderId)

  const handleActiveOrder = (id: number) => {
    setActiveOrder()
    setOrderId(id)
  }

  return (
    <>
      {
        tablesFilter.map(table => (
          <span
            key={table.id}
            onClick={() => handleActiveOrder(table.id)}
            className="min-w-40 h-48 text-3xl bg-bg-100 rounded-2xl flex items-center justify-center hover:bg-primary/50 hover:cursor-pointer transition">
            {table.name}
          </span>
        ))
      }
    </>
  )
}
