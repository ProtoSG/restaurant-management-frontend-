import { useEffect, useState } from 'react'
import { getCategory } from '../services/cateogory.service'
import { ItemCategory } from '../../../../../models/ItemCategory.model'

export default function useItemCategories() {
  const [itemCategories, setItemCategories] = useState<ItemCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true)
        setError(false)
        const data = await getCategory();
        setItemCategories(data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  return { itemCategories, loading, error }
}

