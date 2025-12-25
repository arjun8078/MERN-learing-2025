import { Link, Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { User } from "./pages/Users"
import { Navbar } from "./components/Navbar"
import { UserDetails } from "./pages/USerDetails"
import { Userwithouthook } from "./pages/Userwithouthook"
import { Settings } from "./pages/Settings"


function App() {
 

  return (
  <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navigation Bar */}
    <Navbar></Navbar>

      {/* Main Content Area */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/users" element={<User/>} />
          <Route path='/users-hook' element={<Userwithouthook/>}/>
          <Route path="*" element={<NotFound/>} />
          <Route path="/users/:id" element={<UserDetails />} /> 
          <Route path="/settings" element={<Settings />} /> 
        </Routes>
      </main>
    </div>
  )
}

export default App
