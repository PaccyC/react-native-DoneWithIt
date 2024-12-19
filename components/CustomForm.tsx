import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

interface Props{
    initialValues : Object;
    validationSchema: any;
    onSubmit:  (values:Object)=> void;
    children: React.ReactNode
}

const CustomForm = ({initialValues,validationSchema,onSubmit,children}: Props) => {
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
   >

  {()=>(
    <>
    {children}
    </>
  )}

   </Formik>
  )
}

export default CustomForm