import { useEffect, useState } from 'react'

import {
  useParams,
  useNavigate
} from 'react-router-dom'

import api from '../services/api'

function ProductDetails() {

  const { id } = useParams()

  const navigate = useNavigate()

  const [product, setProduct] = useState({})

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {

    const res = await api.get(`/products/${id}`)

    setProduct(res.data)
  }

  return (
    <div className="details">

      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <img
        src={product.image}
        width="200"
      />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <h3>${product.price}</h3>

    </div>
  )
}

export default ProductDetails