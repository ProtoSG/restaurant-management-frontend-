import { categoryAdapter } from "../adapters/category.adapter"

const api = "http://localhost:8080/item_category"

const getCategory = async () => {
  const response = await fetch(api)
  const data = await response.json()
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log(data)
  return categoryAdapter(data)
}

export { getCategory }
