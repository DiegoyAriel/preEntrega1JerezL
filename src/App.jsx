import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import "./reset.css"

function App() {

  return (
    <>
      <Header/>
      <ItemListContainer greetings={"Welcome to my awesome shop"}/>
    </>
  )
}

export default App
