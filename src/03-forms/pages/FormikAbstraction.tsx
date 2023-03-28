import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { InputField, SelectField, CheckboxField } from '../components';

import '../styles/styles.css'

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={(values) => { 
                console.log(values)
            }}
            validationSchema={ Yup.object({
                firstName: Yup.string()
                                .max(15, 'Debe tener 15 caracteres o menos')
                                .required('Requerido'),
                lastName: Yup.string()
                                .max(15, 'Debe tener 15 caracteres o menos')
                                .required('Requerido'),
                email: Yup.string()
                                .email('Debe tener formato email')
                                .required('Requerido'),
                terms: Yup.boolean()
                        .oneOf([true], 'Debe aceptar las condiciones'),
                jobType: Yup.string()
                        .notOneOf(['it-junior'], 'Esta opción no es permitida')
                        .required('Requerido')
            
            })}
        >
            {
                ({handleReset}) => (
                    <Form>
                        <InputField
                            label='First Name'
                            name='firstName'
                            placeholder='Escribe tu nombre'
                        />

                        <InputField
                            label='Last Name'
                            name='lastName'
                            placeholder='Escribe tu apellido'
                        />
                        
                        <InputField
                            label='Email Address'
                            name='email'
                            placeholder='Escribe tu correo'
                        />

                        <SelectField name="jobType" label='Job Type'>
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It-senior</option>
                            <option value="it-junior">It-junior</option>
                        </SelectField>

                        <CheckboxField label='Terms & Conditions' name='terms'/>

                        <button type="submit">Submit</button>
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>      
                )
            }
            
        </Formik>
        
            
    </div>
  )
}
