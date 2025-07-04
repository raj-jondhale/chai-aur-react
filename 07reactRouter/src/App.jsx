import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Foooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-green-500 text-center '>React Router</h1> */}
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
