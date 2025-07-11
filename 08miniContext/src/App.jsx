import Login from "./components/login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

import './app.css'
function App() {


  return (
    <UserContextProvider>
      <h1>React</h1>
      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App
