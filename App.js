import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Modal from './components/Modal';
import { FontAwesome } from "@expo/vector-icons";

export default function App() {

  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false) 

  const onHandleChangeItem = text => setTextValue(text)

  const addItem = () => {
    if(textValue === "") {
      return
    }
    setItemList(prevState => [
      ...prevState,{ id: Math.random(), value:textValue },
    ])
    setTextValue('')
  }
  
  const renderListItem = ({item, index}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandleModal(index)}>
              <Text style={styles.textItem}>{item?.value}</Text>
              <FontAwesome name="trash" size={20} color={'#2D2D34'} style={styles.iconItem}/>
    </TouchableOpacity>
  )

  const onHandleDelete = () => {
    let arr = itemsList
    arr.splice(itemSelected, 1)
    setItemList(arr)
    setModalVisible(false)
  }

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aspetto Bookstore</Text> 
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='Titulo o Autor del libro'
            placeholderTextColor={'#7F8483'}
            style={styles.input}
            value= {textValue}
            onChangeText={onHandleChangeItem}
            />
          <TouchableOpacity style={styles.addButton} onPress={addItem}>
            <Text>AGREGAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
          data={itemsList}
          renderItem={renderListItem} 
          keyExtractor={item => item.id}
          />
        </View> 
      <Modal modalVisible={modalVisible} 
      onHandleDelete={onHandleDelete} 
      onHandleModal={setModalVisible} 
      itemSelected={itemsList[itemSelected]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 70,
    backgroundColor: '#7CC6FE', 
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    marginBottom: 20,
    color: '#053C5E',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#F1ECCE",
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: '#F1ECCE',
    padding: 8,
  },
  input: {
    width: 200,
    height: 53,
    fontSize: 18,
    paddingLeft: 12,
    color: '#42113C',
  },
  listContainer: {
    marginTop: 25,
    marginBottom: 100,
  },
  itemContainer:{
    height: 60,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#E63880',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 5},
    shadowOpacity: 8,
    shadowRadius: 10,
    elevation: 7,
  },
  textItem: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#fff',
    fontWeight: '600',
    fontVariant: 'no-common-ligatures',
  },
  iconItem: {
   textAlign: 'right',
   marginVertical: -22,
   marginBottom: 5,
   paddingRight: 8,
  },
})

