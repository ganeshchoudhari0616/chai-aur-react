import  { useState ,useContext} from 'react'
import UserContext from '../context/UserContext';

const LogIn = () => {
    const[username,setUserName]=useState('');
    const[password ,setPassword]=useState('');

    // he setUSer he UserContextProvider.jsx madhun karan aapn useContext use kelo ahe mnun
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username && password)
        {
          setUser({username,password}) //ithun data UserContextProvider.jsx hya file madhe patvat ahe 
        }
    }
  return (
    <div>
         <h2>LogIn</h2>
         <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='username' />
         <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
         <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LogIn