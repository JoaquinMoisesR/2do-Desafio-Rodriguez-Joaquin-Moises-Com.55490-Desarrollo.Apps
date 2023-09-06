import { StyleSheet, Text, View, Modal as MyModal, Button } from "react-native";
import React from "react";

const Modal = ({modalVisible, onHandleDelete, onHandleModal, itemSelected}) =>{
   return(
    <MyModal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>  
                <View style={styles.modalTitle}>
                    <Text>ATENCION!!</Text>
                </View>
                <View style={styles.modalMessage}>
                    <Text>¿ESTAS SEGURO DE ELIMINAR "{itemSelected?.value}"?</Text>
                </View>
                <View style={styles.modalButton}>
                    <Button title='Confirmar' onPress={onHandleDelete} color={'#A3320B'}/> 
                    <Button title='Cancelar' onPress={onHandleModal} />    
                </View>
            </View>
        </View>
    </MyModal>
   ) 
}

export default Modal

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
      },
      modalContent:{
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 7},
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 20,
      },
      modalTitle: {
        backgroundColor: '#ABFF4F',
        fontSize: 30,
        marginBottom: 20,
      },
      modalMessage: {
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#CCD5FF',
      },
      modalButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,
      },
})