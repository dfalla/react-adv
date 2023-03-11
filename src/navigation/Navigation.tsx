import { Suspense } from 'react';

import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'

import logo from '../assets/logo.svg'
import { routes } from './routes'

export const Navigation = () => {
  return (
    <Suspense fallback={ <h3>Cargando...</h3> }>
      <BrowserRouter>
          <div className='main-layout'>
            <nav>
              <img src={logo} alt="React-logo" />  
              <ul>
                {
                  routes.map(({ to, name }) => (
                    <li><NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{ name }</NavLink></li>
                    
                  ))
                
                }
              </ul>
            </nav>
            <Routes>
              {
                routes.map(({ path, Component }) => (
                  <Route path={ path } element={<Component/>}/>
                ))
              }
              <Route path='/*' element={ <Navigate to='home' replace/>} />
            </Routes>  

          </div>
      </BrowserRouter>
    </Suspense>
  )
}
