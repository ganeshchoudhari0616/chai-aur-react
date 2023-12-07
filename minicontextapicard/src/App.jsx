
import './App.css'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import  UserContextProvider  from './context/UserContextProvider'
function App() {
  

  return (
    <UserContextProvider>
      <h1>Ganesh</h1>
      <LogIn/>
      <Profile/>
    </UserContextProvider>
    
  )
}

export default App
