import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { InputField, SelectField } from '../components'
import formJson from '../data/custom-form.json'

//! key: tipo string, y luego acepta cualquier valor
const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};


for (const input of formJson) {
    initialValues[input.name] = input.value
    
    if (!input.validations) continue;

    let schema = Yup.string()

    for (const rule of input.validations) { 
        if (rule.type === 'required') { 
            schema = schema.required('Este campo es requerido')
        }

        if (rule.type === 'minLength') { 
            schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 2} caracteres` )
        }

        if (rule.type === 'email') { 
            schema = schema.email('Debe tener un formato email')
        }

        // ... otras reglas de validación
    }

    requiredFields[input.name] = schema;

}


const validationsSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <Formik
        initialValues={initialValues}
        
        onSubmit={(values) => {
            console.log(values)
        }}
        
        validationSchema={ validationsSchema } 
    >
        {
            ({ handleReset }) => (
                <Form>
                    <h1>Dynamic Form</h1>

                    {
                        formJson.map(({ label, type, name, placeholder, options }) => { 

                            if (type === "input" || type === "password" || type === "email") {
                                return <InputField
                                    key={name}
                                    label={label}
                                    name={name}
                                    type={(type as any)}
                                    placeholder={placeholder}
                                />
                            } else if (type === "select") { 
                                return <SelectField
                                            key={name}
                                            label={label}
                                            name={ name }
                                        >
                                            <option value="">Select an option</option>
                                    {
                                        options?.map(({ id, label }) => (
                                                    <option key={id} value={id}>{label}</option>
                                                )) 
                                            }
                                        </SelectField>
                            }

                            return <h1> Type: { type} no es soportado</h1>
                        })
                    }

                    <button type="submit">Submit</button>
                    <button onClick={ handleReset } >Reset</button>
                </Form>         
            )
        }
    </Formik>
  )
}
