import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Distribuidora San Jose"/>
    </div>
  )
}

export default App
