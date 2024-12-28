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
    PickerItemComponent?: any;
    numberOfColumns?: number;
}

const CustomFormPicker = ({ items, name, placeholder, PickerItemComponent, numberOfColumns }: Props) => {
  const { errors, touched, setFieldValue, values } = useFormikContext<any>();

  console.log("Formik Values:", values[name]);
  console.log("Formik Errors:", errors[name]);

  return (
    <>
      <CustomPicker
        PickerItemComponent={PickerItemComponent}
        categories={items}
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        placeholder={placeholder}
        selectedItem={values[name]}
        width="50%"
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default CustomFormPicker;