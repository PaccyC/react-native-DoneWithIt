import React from 'react'
import ErrorMessage from './ErrorMessage'
import CustomTextInput from '../CustomTextInput'
import { useFormikContext } from 'formik'

interface FormValues {
    email: string
    password: string
}
const FormField = (
    {
        name,
        ...otherProps
      }: {
        name: keyof FormValues;
        [key: string]: any;
      }
) => {
    const {handleChange,setFieldTouched,errors,touched}= useFormikContext<FormValues>()
  return (
    <>
      <CustomTextInput
        onChangeText={handleChange(name)}
        onBlur= {()=> setFieldTouched(name)}
              

                {...otherProps}
                />
               <ErrorMessage error={errors[name]} visible={touched[name]}/>

    
    </>
  )
}

export default FormField