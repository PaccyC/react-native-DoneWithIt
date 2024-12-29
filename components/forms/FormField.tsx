import React from 'react'
import ErrorMessage from './ErrorMessage'
import CustomTextInput from '../CustomTextInput'
import { useFormikContext } from 'formik'

interface FormValues {

    name: string,
    email: string,
    password: string,

    // Post
    title: string,
    price: number,
    category: string,
    description: string,
  
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
    const {values,setFieldValue,setFieldTouched,errors,touched}= useFormikContext<FormValues>()
  return (
    <>
      <CustomTextInput
        onChangeText={(text:string)=>setFieldValue(name,text)}
        onBlur= {()=> setFieldTouched(name)}
        value={values[name]}
        

                {...otherProps}
                />
               <ErrorMessage error={errors[name]} visible={touched[name]}/>

    
    </>
  )
}

export default FormField