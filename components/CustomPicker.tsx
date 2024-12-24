import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatList, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Colors } from '@/constants/Colors'
import Screen from './Screen'
import PickerItem from './PickerItem'
import  Category  from '@/app/interfaces/category'



interface Props{
    categories?: Category[];
    icon?: any;
    PickerItemComponent: any;
   placeholder?: any;
   selectedItem: Category;
   onSelectItem: (item:Category)=> void;
   width?: any;
   numberOfColumns?: number;
}


const CustomPicker = ({ categories,
                         icon,
                         numberOfColumns,
                         onSelectItem,
                         PickerItemComponent =PickerItem,
                        placeholder,
                        selectedItem,
                        width="100%"}:Props) => {

    const [modalVisible, setModalVisible] = useState(false)
  return (
    <React.Fragment>

    
    <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>

    <View style={[styles.container,{width}]}>
        
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
    <Screen style={styles.modalContainer}>

        <Button title='Close' onPress={()=>setModalVisible(false)}/>

            <FlatList
               data={categories || []}
               keyExtractor={(item,index)=> index.toString()}
               numColumns={numberOfColumns}
               renderItem={({item})=> (
                <PickerItemComponent
                   item={item}
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
    modalContainer: {
    // padding:10
    },

    container:{
        backgroundColor:Colors.white,
        borderRadius:25,
        flexDirection: "row",
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