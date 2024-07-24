import ErrorTables from "./components/ErrorTables"
import ListTables from "./components/ListTables"
import LoadingTables from "./components/LoadingTables"
import useTables from "./hooks/useTables"

export default function TableContainer() {
  const { tables, loading, error } = useTables()

  return (
    <section className="w-full grid grid-cols-2 gap-6">
      {
        loading ? <LoadingTables />
          : error ? <ErrorTables />
            : <ListTables tables={tables} />
      }
    </section>
  )
}
