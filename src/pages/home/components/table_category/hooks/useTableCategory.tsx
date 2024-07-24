import { useEffect, useState } from "react"
import { TableCategory } from "../../../../../models/TableCategory.model"
import { getTableCategory } from "../services/tableCategory.services"

export default function useTableCategory() {
  const [tableCategories, setTableCategories] = useState<TableCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  async function fetchTableCategory() {
    setLoading(true)
    try {
      const data = await getTableCategory()
      setTableCategories(data)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTableCategory()
  }, [])

  return { tableCategories, loading, error }
}
