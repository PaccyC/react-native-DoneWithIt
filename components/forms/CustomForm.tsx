import React from 'react';
import { Formik, FormikProps } from 'formik';

interface CustomFormProps<Values> {
  initialValues: Values;
  validationSchema: any;
  onSubmit: (values: Values) => void;
  children: (formikProps: FormikProps<Values>) => React.ReactNode;
}

const CustomForm = <Values extends {}>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: CustomFormProps<Values>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {formikProps => (
        <>
          {children(formikProps)}  
        </>
      )}
    </Formik>
  );
};

export default CustomForm;
