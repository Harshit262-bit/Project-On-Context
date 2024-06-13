import { useContext, useState } from 'react'
import UserContext from '../context/Usercontext'


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        //when we press submit value has been placed any where so we need to prevent that value 
            e.preventDefault()
            setUser({username, password})
    }
  return (
    <div>
        <h2> Login </h2>

        <input type='text' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='UserName' />
        <br />
        <br />
        <input type='text' 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        placeholder='Password' />
        <br />
        <br />
        <button onClick={handleSubmit}> Submit </button>

    
    </div>
  )
}

export default Login