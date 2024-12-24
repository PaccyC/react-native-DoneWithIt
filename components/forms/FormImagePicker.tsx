import { View, Text } from 'react-native'
import React from 'react'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'
import { string } from 'yup'

interface Props{
    name: string;
}
const FormImagePicker = ({name}:Props) => {

     const {values,errors,setFieldValue,touched}= useFormikContext()

     const imageUris= values[name];
const handleAdd = (uri:string) => {
    setFieldValue(name,[...imageUris,uri]);
  }
  
  const handleRemove = (uri:string) => {
    setFieldValue(name,imageUris.filter(imageUri=> imageUri !== uri))
  }
  
  return (
    <>
    <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
    <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  )
}

export default FormImagePicker