import { useEffect, useState } from 'react'
import { Inventory } from '../../../../../models/Inventory.model'
import { getInventory } from '../services/invenotry.service'

export default function useInventory() {
  const [inventory, setInventory] = useState<Inventory[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  async function fetchInventory() {
    setLoading(true)
    try {
      const data = await getInventory()
      setInventory(data)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInventory()
  }, [])

  return { inventory, loading, error }
}

