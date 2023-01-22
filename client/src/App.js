import './App.css'
import Register from './pages/Register/Register'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Alumnos from './pages/Alumnos/Alumnos';
import PerfilAlumno from './pages/Alumnos/PerfilAlumno';


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
  },
  {
    path:"/alumno/:id",
    element: <PerfilAlumno/>
  },
  {
    path:"/alumno",
    element: <Alumnos />
  },
  {
    path:"/profesor/:id",
    element: <></>
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
