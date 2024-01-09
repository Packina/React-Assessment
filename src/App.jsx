// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Navbar} from './components/Navbar.jsx'
import {Owner} from './components/Owner.jsx'
import {Home} from './components/Home.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div className='App'>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Home />}/> */}
      <Route path="/home" element={<Home />}/>
      <Route path="/owner" element={<Owner />}/>
    </Routes>
    </div>
    );
}

export default App;
