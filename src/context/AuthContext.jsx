import {
  createContext,
  useState
} from 'react'

export const AuthContext =
  createContext()

function AuthProvider({
  children
}) {

  const [user, setUser] =
    useState(null)

  const login = (
    email,
    password
  ) => {

    if (
      email === 'admin@gmail.com' &&
      password === '1234'
    ) {

      setUser({
        email,
        role: 'admin'
      })

    } else {

      setUser({
        email,
        role: 'user'
      })
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>
  )
}

export default AuthProvider