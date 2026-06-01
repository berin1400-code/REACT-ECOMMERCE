import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import Login from './pages/Login'
import Cart from './pages/Cart'

import {
  Routes,
  Route
} from 'react-router-dom'

import AuthProvider from './context/AuthContext'

import CartProvider from './context/CartContext'

import ProtectedRoute from './routes/ProtectedRoute'

function App() {

  return (

    <AuthProvider>

      <CartProvider>

        <Header />

        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/add"
            element={
              <ProtectedRoute>

                <AddProduct />

              </ProtectedRoute>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>

                <EditProduct />

              </ProtectedRoute>
            }
          />

        </Routes>

        <Footer />

      </CartProvider>

    </AuthProvider>
  )
}

export default App