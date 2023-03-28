import { useField, ErrorMessage } from "formik"

interface Props { 
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

export const InputField = ({ label, ...props }: Props) => {

    const [ field ] = useField(props);

  return (
    <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="input-text" type="text" {...field} {...props} />
        <ErrorMessage name={ props.name } component="span"/>
        
    </>
  )
}
