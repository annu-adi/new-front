import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

function App() {
  const [name, setName] = useState()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('https://new-back-two.vercel.app/register', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
 
  return (
    <>
     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-60'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input type="text" placeholder='Enter Name'
            autoComplete="off"
            name="name"
            className='form-control rounded-0'
            onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>email</strong>
            </label>
            <input type="text" placeholder='Enter email'
            autoComplete="off"
            name="email"
            className='form-control rounded-0'
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>


          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
           <input type="password" 
           placeholder='Enter password'
            name="password" 
            className="form-control rounded-0"
            onChange={(e)=>setPassword(e.target.value)}
            />

          </div>
          <button type="submit" className='btn btn-success w-80 rounded-0'>
            Register
          </button>
          <p>Already have an account</p>
          <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Login
          </button>
        </form>
      </div>
     </div> 
        
    </>
  )
}

export default App


