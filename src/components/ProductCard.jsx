import { Link } from 'react-router-dom'

import { useContext } from 'react'

import {
  AuthContext
} from '../context/AuthContext'

import {
  CartContext
} from '../context/CartContext'

function ProductCard({
  product,
  handleDelete
}) {

  const { user } =
    useContext(AuthContext)

  const { addToCart } =
    useContext(CartContext)

  return (

    <div className="card">

      <img
        src={product.image}
        width="120"
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <div className="btns">

        <Link
          to={`/product/${product.id}`}
        >
          View
        </Link>

        {
          user?.role === 'admin' ? (

            <>

              <Link
                to={`/edit/${product.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() =>

                  handleDelete &&
                  handleDelete(product.id)

                }
              >
                Delete
              </button>

            </>

          ) : (

            <button
              onClick={() =>
                addToCart(product)
              }
            >
              Add To Cart
            </button>

          )
        }

      </div>

    </div>
  )
}

export default ProductCard