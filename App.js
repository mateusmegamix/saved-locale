import { SafeAreaView, StatusBar, StyleSheet, FlatList } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import {Nota} from './src/componentes/Nota'
import  AsyncStorage  from "@react-native-async-storage/async-storage"
import {useState} from 'react'

export default function App() {

  const [notas, setnotas] = useState([])

  async function mostraNotas() {
    const todasChaves = await AsyncStorage.getAllKeys()
    const todasNotas = await AsyncStorage.multiGet(todasChaves)
    setnotas(todasNotas)
    console.log(todasNotas)
  }

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList 
        data={notas}
        renderItem={(nota) => <Nota {...nota} />}
        keyExtractor={nota => nota[0]}
      /> 
      <NotaEditor mostraNotas={mostraNotas} />
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})

