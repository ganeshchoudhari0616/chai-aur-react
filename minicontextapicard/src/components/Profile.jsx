import  { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext)
    if(!user) return <div>please login</div>
  return (
    <>
    
    <div>Welcome {user.username}</div>
    <div>Welcome {user.password}</div>
    </>
  )
}

export default Profile