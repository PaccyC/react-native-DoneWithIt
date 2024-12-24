import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatList, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Colors } from '@/constants/Colors'
import Screen from './Screen'
import PickerItem from './PickerItem'
import  Category  from '@/app/interfaces/category'



interface Props{
   icon?: any,
   placeholder?: any,
   categories?: Category[]
   selectedItem: Category,
   onSelectItem: (item:Category)=> void;
   
}


const CustomPicker = ({icon,placeholder,categories,selectedItem,onSelectItem}:Props) => {

    const [modalVisible, setModalVisible] = useState(false)
  return (
    <React.Fragment>

    
    <TouchableWithoutFeedback>

    <View style={styles.container}>
        
            <MaterialCommunityIcons 
                name={icon}  
                size={20} 
                color={Colors.medium}
                />
                {selectedItem ? <Text style={styles.text}>{selectedItem.label}</Text>: <Text style={styles.placeholder}>{placeholder}</Text>}

                    <MaterialCommunityIcons 
                        name="chevron-down" 
                        size={20} 
                        color={Colors.medium}
                        onPress={()=>setModalVisible(true)}
                    />  
    </View>
</TouchableWithoutFeedback>

  <Modal visible={modalVisible} animationType='slide'>
    <Screen style={""}>

        <Button title='Close' onPress={()=>setModalVisible(false)}/>

            <FlatList
               data={categories || []}
               keyExtractor={(item,index)=> index.toString()}
               renderItem={({item})=> (
                <PickerItem
                   label={item.label }
                   onPress={()=> {
                    setModalVisible(false);

                    onSelectItem(item);}
                   }
                
                />
               )}
            />

    </Screen>
  </Modal>

</React.Fragment>
  )
}

export default CustomPicker


const styles = StyleSheet.create({

    container:{
        backgroundColor:Colors.white,
        borderRadius:25,
        flexDirection: "row",
        width:  "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    textInput:{
        fontSize:18,
        color: Colors.dark_2
    },
    icon:{
        marginRight:10,
        alignContent: "center"
    },
    text:{
        flex: 1,
        fontSize: 18
    },
    placeholder:{
      color: Colors.medium,
      flex:1,
      fontSize:18
    }
})