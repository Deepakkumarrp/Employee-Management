import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Employee Management System</h1>
        <button onClick={() => navigate('/signup')}>SignUp</button>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/dashboard')}>DashBoard</button>
    </div>
  )
}

export default Home