import { SafeAreaView, StatusBar, StyleSheet, FlatList } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import {Nota} from './src/componentes/Nota'
import {useEffect, useState} from 'react'
import { criarTabela } from "./android/app/src/servicos/Notas"

export default function App() {

  useEffect(() => {
    criarTabela()
  }, [])

  const [notas, setnotas] = useState([])

  async function mostraNotas() {
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

