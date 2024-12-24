import { View, Text } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import CustomPicker from '../CustomPicker'
import Category from '@/app/interfaces/category'


interface Props {
    items: Category[];
    name: string;
    placeholder: string;
}
const CustomFormPicker = ({items,name,placeholder}:Props) => {
    const {errors,touched,setFieldValue,values}= useFormikContext()
  return (
    <>
    <CustomPicker
     categories={items}
     onSelectItem={(item)=>setFieldValue(name,item)}
     placeholder={placeholder}
     selectedItem={values[name]}
    />
    <ErrorMessage  error={errors[name]} visible={touched[name]}/>
    </>
  )
}

export default CustomFormPicker