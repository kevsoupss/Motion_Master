import { AuthProvider, useAuth } from './contexts/AuthContext';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <AuthStateManager />
    </AuthProvider>
  )
}

function AuthStateManager() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>;
  }

  return currentUser ? <AuthenticatedApp /> : <Login />;
}

export default App
