import { useState } from 'react'
import Nav from './components/Nav/Nav'
import ContactHeader from './components/ContactHeader/ContactHeader'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <Nav/>
    <ContactHeader/>

  </div>
}

export default App
