import { useFormik } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css'

export const FormikYupPage = () => {

//! getFieldProps-> {...getFieldProps('nombreDelInput')} -> resume el name el onBlur, el onChange y el value
    const {
        handleSubmit, handleReset,
        errors, touched,  getFieldProps
    } = useFormik({
        
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },

        onSubmit: (values) => { 
            console.log(values)
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
            lastName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
            email: Yup.string()
                            .email('Debe tener formato email')
                            .required('Requerido'),
            
        })
    });

  return (
    <div>
        <h1>Formik Yup</h1>
        
        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="firstName">First Name</label>
            <input type="text" {...getFieldProps('firstName')} /> 
            {touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }
            
            <label htmlFor="lastName">Last Name</label>
            <input type="text" {...getFieldProps('lastName')} />
            {touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }
              
            <label htmlFor="email">Email Addres</label>
            <input type="email" {...getFieldProps('email')} />
            {touched.email && errors.email && <span>{ errors.email }</span> }  
            
            <button type="submit">Submit</button>
            <button type="button" onClick={ handleReset }>Reset Form</button>
        </form>
    </div>
  )
}
