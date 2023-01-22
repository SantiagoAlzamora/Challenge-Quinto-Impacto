import './App.css'
import Register from './pages/Register/Register'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function ProtectedRoute({ children }) {
  const {data} = useContext(AuthContext)
  if (!data.user) {
    return <Navigate to={"/login"} />
  }
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Home /></ProtectedRoute>
  },
  {
    path: "/login",
    element:<Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
