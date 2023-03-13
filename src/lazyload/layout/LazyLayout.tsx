import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { routesModuloLazyLayout } from "../routes/routes"

export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout - puede ser un nabvar, sidebar, un componente que siempre se va renderizar en todas las pantallas</h1>      

          {/* Aquí van las rutas hijas */}
          <ul>
              
              {
                  routesModuloLazyLayout.map(({ to, name }) => (
                      <li><NavLink to={to} style={{ textDecoration: 'none', color: 'white' }} className={({ isActive }) => isActive ? 'nav-active' : ''}>{ name }</NavLink></li>
                  ))
              
              }
        </ul>
        

        <Routes>
            {
                routesModuloLazyLayout.map(({ path, Component }) => (
                <Route path={ path } element={ <Component/> }/>
                ))
            }
            <Route path='*' element={ <Navigate to='lazyPage1' replace /> } />
        </Routes>
    </div>
  )
}

export default LazyLayout
