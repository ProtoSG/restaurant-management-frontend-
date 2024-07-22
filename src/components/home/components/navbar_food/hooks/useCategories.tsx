import { useEffect, useState } from 'react'
import { Category } from '../adapters/category.adapter'
import { getCategory } from '../services/cateogory.service'

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true)
        setError(false)
        const data = await getCategory();
        setCategories(data)
        setLoading(false)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  return { categories, loading, error }
}

