import { useState } from 'react'

import api from '../services/api'

import ProductForm from '../components/ProductForm'

function AddProduct() {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()

    const newProduct = {
      title,
      price
    }

    await api.post('/products', newProduct)

    alert('Product Added')

    setTitle('')
    setPrice('')
  }

  return (
    <div>

      <h2>Add Product</h2>

      <ProductForm
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        handleSubmit={handleSubmit}
        buttonText="Add Product"
      />

    </div>
  )
}

export default AddProduct