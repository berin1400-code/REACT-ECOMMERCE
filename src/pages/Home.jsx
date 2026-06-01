import { useEffect, useState } from 'react'

import api from '../services/api'

import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'

function Home() {

  const [products, setProducts] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {

    const res = await api.get('/products')

    setProducts(res.data)
  }

  const handleDelete = async (id) => {

    await api.delete(`/products/${id}`)

    const updatedProducts = products.filter(
      (item) => item.id !== id
    )

    setProducts(updatedProducts)

    alert('Product Deleted')
  }

  const filteredProducts = products.filter(
    (item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
  )

  return (
    <div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="product-container">

        {filteredProducts.map((item) => (

          <ProductCard
            key={item.id}
            product={item}
            handleDelete={handleDelete}
          />

        ))}

      </div>

    </div>
  )
}

export default Home