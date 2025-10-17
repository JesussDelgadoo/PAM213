import { Modal, Button, Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

export default function ModalScreen() {

  const [modalVisible, setModalVisible] = useState(false);
    
    return (
    <View style={styles.container}>

      <Button title= "Abrir Modal" onPress={() => setModalVisible(true)}/>

      <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible); }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Este es mi primer modal! </Text>
            <Button title= "Cerrar" onPress={() => setModalVisible(false)}/>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
   modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})