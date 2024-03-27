import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your logic for handling login
    console.log('Submitted:', { username, password });
    // Reset the form after submission
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email}
         onChange={(event) => setEmail(event.target.value)}
         required />
        </div>

        <div>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password}
         onChange={(event) => setPassword(event.target.value)}
         required/>
        </div>

        <div>

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword}
         onChange={(event) => setConfirmPassword(event.target.value)}
         required/>
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
}

export default SignUp;