import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css'

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '' //! los select se inicializan con string vacíos
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
                        <label htmlFor="firstName">First Name</label>
                        <Field type="textarea" name="firstName"/> 
                        <ErrorMessage name="firstName" component="span"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name="lastName"/>
                        <ErrorMessage name="lastName" component="span" />
                        
                        <label htmlFor="email">Email Addres</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field as="select" name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It-senior</option>
                            <option value="it-junior">It-junior</option>
                        
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        
                        <label>
                            <Field type="checkbox" name="terms" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span"/>


                        <button type="submit">Submit</button>
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>      
                )
            }
            
        </Formik>
        
            
    </div>
  )
}
