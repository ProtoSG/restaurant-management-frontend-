import { useEffect, useState } from "react";
import { Table } from "../../../../../models/Table.model";
import { getTable } from "../services/table.service";

export default function useTables() {
  const [tables, setTables] = useState<Table[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  async function fetchTables() {
    setLoading(true)
    try {
      const data = await getTable()
      setTables(data)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTables()
  }, [])

  return { tables, loading, error }
}
