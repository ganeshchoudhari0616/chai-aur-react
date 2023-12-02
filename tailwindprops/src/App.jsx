import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    name:'ganesh',
    age:27,
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Taiwind test</h1>
    <Card userName="ganesh" someOBJ={myObj} />
    <Card userName="Omiiii" btnText="Visit Me"/>
    </>
  )
}

export default App
