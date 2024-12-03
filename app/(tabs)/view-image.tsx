import { StyleSheet, Text, View,Image, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const ViewImage = () => {
  return (
    <View style={styles.container}>
        <View>

        <MaterialCommunityIcons name='close' color="white" style={styles.closeIcon} size={35}/>
        </View>
        <View>
        <MaterialCommunityIcons name='trash-can-outline' color="white" style={styles.deleteIcon} size={35}/>
        </View>
        <Image 
        style={styles.image}
        resizeMode='contain'
        source={require("../../assets/images/chair.jpg")}/>
    </View>
  )
}

export default ViewImage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000",
        paddingTop: StatusBar.currentHeight
    },
    image:{
        width: '100%',
        height: '100%',
        marginTop: 20
    },
    closeIcon:{
        position: "absolute",
        top: 30,
        left: 40
    },
    deleteIcon:{
        position: "absolute",
        top: 30,
        right: 40
    }
})
