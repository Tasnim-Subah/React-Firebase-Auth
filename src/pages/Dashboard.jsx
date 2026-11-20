import { useAuth } from '../AuthContext'

function Dashboard() {
  const { user } = useAuth()

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>Logged in as: {user.email}</p>
    </div>
  )
}

export default Dashboard
