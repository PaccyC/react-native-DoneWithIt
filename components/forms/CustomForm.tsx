import React from 'react';
import { Formik } from 'formik';

interface FormValues {
  email: string;
  password: any;
}

interface Props {
  initialValues: FormValues;
  validationSchema: any;
  onSubmit: (values: FormValues) => void;
  children: React.ReactNode;
}

const CustomForm = ({ initialValues, validationSchema, onSubmit, children }: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <>
          {children}
        </>
      )}
    </Formik>
  );
};

export default CustomForm;
