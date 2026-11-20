import { Navigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  // wait for firebase to check the login first, otherwise a refresh
  // would send a logged in user to the login page by mistake
  if (loading) {
    return <p>Loading...</p>
  }

  // not logged in -> go to login page
  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
