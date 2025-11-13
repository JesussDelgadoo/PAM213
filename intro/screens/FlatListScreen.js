import { Text, StyleSheet, View, FlatList } from 'react-native'
import React, {useState} from 'react'

class Producto {
  constructor(id, titulo, desccripcion, precio) {
    this.id = id
    this.titulo = titulo
    this.descripcion = desccripcion
    this.precio = precio
  }
}

export const productos2 = [
  new Producto ('1', 'Auriculares', 'Experimenta algo sensacional', 99),
  new Producto ('2', 'Producto 2', 'Descripción del producto 1', 99),
  new Producto ('3', 'Producto 3', 'Descripción del producto 1', 99),
  new Producto ('4', 'Producto 4', 'Descripción del producto 1', 99),
]

const FlatlistScreen = () => {
  const [productlist,setProductlist] = useState(productos2);
  return (
    <View style={styles.lista}>
      <FlatList
        data={productlist}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.titulo}</Text>
            <Text>{item.descripcion}</Text>
            <Text>{item.precio}</Text>
            <Text>Ver detalles</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  lista: {
    paddingVertical: 200
  },
  item: {
    padding: 15, // Espacio interno del item
    marginVertical: 8, // Separación vertical entre items
    marginHorizontal: 16, // Separación horizontal desde los bordes
    backgroundColor: '#f0f0f0', 
  },  
});

export default FlatlistScreen