import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import { Formik, Form } from 'formik';
import * as Yup from 'yup'

// name: requerido, max 15 carac, min 2 carac
// email: requerido, email
// password: min 6 
// repeat password: min 6 y sea igual a password

import '../styles/styles.css'
import { InputField } from '../components';

export const RegisterFormikPage = () => {   
  return (
    <div>
        <h1>Register Formik Page</h1> 
        <Formik
            initialValues={{
                name: "",
                email: "",
                password1: "",
                password2: ""
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Este campo es requerido')
                    .min(2, 'Mínimo 2 letras')
                    .max(15, 'Maximo 15 letras'),
                email: Yup.string()
                    .required('Este campo es requerido')
                    .email('Debe tener un formato de email'),
                password1: Yup.string()
                    .required('Este campo es requerido')
                    .min(6, 'Mínimo de 6 caracteres')
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}/, 'La contraseña escrita no cumple con los parámetros'),
                password2: Yup.string()
                    .required('Este campo es requerido')
                    //! oneOf -> uno de los valores
                    .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
            })}
        >
            {
                ({ handleReset }) => (
                    <Form>
                        <InputField label='Nombre: ' name='name' placeholder='Escribe tu nombre' />
                        
                        <InputField label='Email' name='email' type='email'  placeholder='Escribe tu email'/>
                        
                        <InputField label='Password' name='password1' type='password' placeholder='***************'/>
                        
                        <InputField label='Repeat Password' name='password2' type='password' placeholder='***************'/>

                        <button type="submit">Registrar Usuario</button>
                        <button onClick= {handleReset }> Reset Form</button>
                    </Form>    
                )
            }     
          
        </Formik> 

        
    </div>
  )
}
