import { BrowserRouter, Routes, Route, NavLink, Navigate  } from 'react-router-dom'
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction } from '../03-forms/pages'




import logo from '../assets/logo.svg'


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt="React-logo" />  
                <li><NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink></li>
                <li><NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink></li>
                <li><NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink></li>
                <li><NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink></li>
                <li><NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstractations</NavLink></li>
                
                <li><NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink></li>  
            </nav>


            <Routes>
                <Route path="register" element={ <RegisterPage/> }/>
                <Route path="formik-basic" element={ <FormikBasicPage/> }/>
                <Route path="formik-yup" element={ <FormikYupPage/> }/>
                <Route path="formik-components" element={ <FormikComponents/> }/>
                <Route path="formik-abstractation" element={ <FormikAbstraction/> }/>
                
                
                <Route path="users" element={ <h1>Users Page</h1> }/>

            </Routes>  

        </div>
    </BrowserRouter>
  )
}
