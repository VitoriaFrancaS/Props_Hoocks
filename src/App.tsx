import Card from "./components/Card/Card"
import Contador from "./components/Contador/Contador"
import Task from "./components/Task/Task"
import Home from "./components/Home/Home"

function App() {
  return (
    <>
   <Card 
   titulo="Componente Card"
   descricao="Este é um componente de card que recebe props"
   />

   <Contador/>

   <Task/>

   <Home/>


  
   </>
  )
}

export default App
