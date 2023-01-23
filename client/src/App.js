import './App.scss'
import Register from './pages/Register/Register'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Alumnos from './pages/Alumnos/Alumnos';
import PerfilAlumno from './pages/Alumnos/PerfilAlumno';
import Header from './components/Header'
import Profesores from './pages/Profesores/Profesores';


function ProtectedRoute({ children }) {
  const {data} = useContext(AuthContext)
  if (!data.user) {
    return <Navigate to={"/login"} />
  }
  return children
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/alumno/:id",
        element: <PerfilAlumno/>
      },
      {
        path:"/alumno",
        element: <Alumnos />
      },
      {
        path:"/profesor/:id",
        element: <Layout></Layout>
      },
      {
        path:"/profesor",
        element: <Profesores />
      }
    ]
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
