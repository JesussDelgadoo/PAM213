import { useEffect, useState, useCallback, use } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,StyleSheet, Alert,ActivityIndicator,Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([])
  const [nombre, setNombre] = useState('')
  const [loading, setLoading] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [editarId, setEditarId] = useState(null)


  // SELECT - Cargar usuarios desde la BD
  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Inicializar y cargar datos
  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();
    // Avisar los cambios automaticos
    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  // INSERT - Agregar nuevo usuario
const handleAgregar = async () => {
  if (guardando) return;
  try {
    setGuardando(true);
    const usuarioCreado = await controller.crearUsuario(nombre);
    Alert.alert(
      'Usuario Creado',
      `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`
    );
    setNombre('');
  } catch (error) {
    Alert.alert('Error', error.message);
  } finally {
    setGuardando(false);
  }
};

const handleActualizar = async () => {
  if (guardando) return;
  try {
    setGuardando(true);
    const usuarioActualizado = await controller.actualizarUsuario(editarId, nombre);
    Alert.alert(
      'Usuario Actualizado',
      `"${usuarioActualizado.nombre}" actualizado correctamente`
    );
    setNombre('');
    setEditarId(null);
  } catch (error) {
    Alert.alert('Error', error.message);
  } finally {
    setGuardando(false);
  }
}

const handleEliminar = (id) => {
  Alert.alert(
    'Eliminar',
    '¿Deseas eliminar este usuario?',
    [
      {text: 'Cancelar', style: 'cancel'},
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: async () => {
          try {
            await controller.eliminarUsuario(id);
            if (editarId === id) cancelarEdicion();
          } catch (error) {
            Alert.alert('Error', error.message)
          }
        }
      }
    ]
  )
}
const prepararEdicion = (item) => {
    setNombre(item.nombre);
    setEditarId(item.id);
  };

  const cancelarEdicion = () => {
    setNombre('');
    setEditarId(null);
  };
// Renderizar cada usuario
const renderUsuario = ({ item, index }) => (
  <View style={styles.userItem}>
    <View style={styles.userNumber}>
      <Text style={styles.userNumberText}>{index + 1}</Text>
    </View>
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{item.nombre}</Text>
      <Text style={styles.userId}>ID: {item.id}</Text>
      <Text style={styles.userDate}>
        {new Date(item.fechaCreacion || Date.now()).toLocaleDateString()}
      </Text>
    </View>
    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.btnEdit} onPress={() => prepararEdicion(item)}>
        <Text style={styles.actionText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnDelete} onPress={() => handleEliminar(item.id)}>
        <Text style={styles.actionText}>X</Text>
      </TouchableOpacity>
    </View>
  </View>
);

  return (

    <View style={styles.container}>

      {/* Zona del encabezado */}

      <Text style={styles.title}> CRUD USUARIOS</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      {/* Zona del INSERT / UPDATE */}

      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}> 
            {editarId ? 'Editar Usuario' : 'Insertar Usuario'}
        </Text>

        <TextInput
          style={[styles.input, editarId && styles.inputEditing]}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        {/* Lógica de Botones: Mostrar Agregar o (Actualizar + Cancelar) */}
        {editarId ? (
            <View style={styles.editButtonsContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonUpdate, styles.flex1]}
                    onPress={handleActualizar}
                    disabled={guardando} >
                    <Text style={styles.buttonText}>
                        {guardando ? 'Guardando...' : 'Actualizar'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonCancel, styles.flex1]}
                    onPress={cancelarEdicion}
                    disabled={guardando} >
                    <Text style={styles.cancelText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        ) : (
            <TouchableOpacity
                style={[styles.button, guardando && styles.buttonDisabled]}
                onPress={handleAgregar}
                disabled={guardando} >
                <Text style={styles.buttonText}>
                    {guardando ? ' Guardando...' : 'Agregar Usuario'}
                </Text>
            </TouchableOpacity>
        )}

      </View>



      {/* Zona del SELECT */}

      <View style={styles.selectSection}>

        <View style={styles.selectHeader}>

          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

          <TouchableOpacity
            style={styles.refreshButton}
            onPress={cargarUsuarios} >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>

        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
        ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}


      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  inputEditing: {
    borderColor: '#ffa726',
    backgroundColor: '#fffbf0',
    borderWidth: 2
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  flex1: {
    flex:1,
  },
  editButtonsContainer: {
    flexDirection: 'row',
    gap: 10
  },
  buttonUpdate: {
    backgroundColor: '#ffa726',
  },
  buttonCancel: {
    backgroundColor: '#e0e0e0',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelText: {
    color: '#555',
    fontSize: 16,
    fontWeight: '600',
  },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  // Estilos para los botones pequeños de la lista
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 8
  },
  btnEdit: {
    backgroundColor: '#ffa726',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6
  },
  btnDelete: {
    backgroundColor: '#ef5350',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
});