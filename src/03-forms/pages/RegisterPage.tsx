import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';


import '../styles/styles.css'

export const RegisterPage = () => {

    const { email,name, onChange, password1, password2, formData, resetForm, isValidEmail } = useForm({
        name: "",
        email: "",
        password1: "",
        password2: ""
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => { 

        event.preventDefault()
        console.log(formData)
    }
   
  return (
    <div>
        <h1>Register Page</h1>  

        <form noValidate onSubmit={ onSubmit }>
            <input
                type="text"
                name="name"
                placeholder="name"
                value={ name }
                onChange={ onChange }
                className={ `${name.trim().length <= 0 && "has-error" }` } 
            />  
            { name.trim().length <= 0 && <span>Este campo es necesario</span>  }  
            <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={onChange}
                className={ `${!isValidEmail(email) && "has-error"}` }
            />
            { !isValidEmail(email) && <span>El email no es válido</span> }
            <input
                type="password"
                name="password1"
                placeholder="password"
                value={ password1 }
                onChange={ onChange }
              />
            { password1.trim().length <= 0 && <span>Este campo es necesario</span>  }  
            { password1.trim().length > 0 &&password1.trim().length < 6 && <span>La contraseña debe tener mínimo 6 caracteres</span>  }  
              
            <input
                type="password"
                name="password2"
                placeholder="Repeat Password"
                value={ password2 }
                onChange={ onChange }
            />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
            { password2.trim().length > 0 && password2 !== password1 && <span>Las contraseñas deben ser iguales</span> }  
            
            <button type="submit">Create</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}
