import { useEffect, useState } from 'react'

import {
  useParams,
  useNavigate
} from 'react-router-dom'

import api from '../services/api'

import ProductForm from '../components/ProductForm'

function EditProduct() {

  const { id } = useParams()

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {

    const res = await api.get(`/products/${id}`)

    setTitle(res.data.title)
    setPrice(res.data.price)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    const updatedProduct = {
      title,
      price
    }

    await api.put(
      `/products/${id}`,
      updatedProduct
    )

    alert('Product Updated')

    navigate('/')
  }

  return (
    <div>

      <h2>Edit Product</h2>

      <ProductForm
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        handleSubmit={handleSubmit}
        buttonText="Update Product"
      />

    </div>
  )
}

export default EditProduct