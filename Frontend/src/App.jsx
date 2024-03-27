import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <Routes>
        <Route path={} />
        <Route path={} />
        <Route path={} />
      </Routes>
    </div>
  )
}

export default App
