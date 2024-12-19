import { View, Text } from 'react-native'
import { useFormikContext } from 'formik'

import AppButton from "../AppButton"
import { Colors } from '@/constants/Colors'

const CustomSubmitButton = ({title}:{title:string}) => {

    const { handleSubmit } = useFormikContext()
  return (
    <AppButton
    title={title}
    color={Colors.primary}
    onPress={handleSubmit}
    />
  )
}

export default CustomSubmitButton