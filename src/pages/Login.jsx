import {
  useState,
  useContext
} from 'react'

import {
  useNavigate
} from 'react-router-dom'

import {
  AuthContext
} from '../context/AuthContext'

function Login() {

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const { login } =
    useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()

    login(email, password)

    navigate('/home')
  }

  return (

    <div className="form-container">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

      <h4>
        Admin Login:
      </h4>

      <p>
        admin@gmail.com
      </p>

      <p>
        1234
      </p>

    </div>
  )
}

export default Login