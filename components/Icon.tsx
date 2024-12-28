import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IconProps{
    name: any;
    backgroundColor: string;
    iconColor?: string;
    size: number;
}
const Icon = ({name,backgroundColor="#000",iconColor ="#fff",size = 30}:IconProps) => {
  return (
    <View style={{
        width:size,
        height:size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center"
  
    }}>
      <MaterialCommunityIcons name={name} color={iconColor} />
    </View>
  )
}

export default Icon