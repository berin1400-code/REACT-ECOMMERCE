import { Link } from 'react-router-dom'

import { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'

import { CartContext } from '../context/CartContext'

function Header() {

  const { user, logout } =
    useContext(AuthContext)

  const { cart } =
    useContext(CartContext)

  return (

    <header className="header">

      <h2>Fake Store</h2>

      <nav>

        <Link to="/home">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        {
          user?.role === 'admin' && (

            <Link to="/add">
              Add Product
            </Link>

          )
        }

        {
          user ? (

            <button onClick={logout}>
              Logout
            </button>

          ) : (

            <Link to="/">
              Login
            </Link>

          )
        }

      </nav>

    </header>
  )
}

export default Header