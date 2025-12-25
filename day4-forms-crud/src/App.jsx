import { ContactForm } from "./components/ContatctForm"
import { FocusInput } from "./components/FocusInput"
import { NotesApp } from "./components/NotesApp"
import { PreviousValue } from "./components/PreviousValue"
import { RenderCount } from "./components/RenderCount"


function App() {


  

  return (
    <>
    <div style={{ 
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'system-ui'
    }}>
      <h1>Day 4: Forms & CRUD</h1>
      <p>Advanced React patterns and complete applications</p>
    </div>

    <NotesApp/>
{/* 
    <ContactForm/>

    <FocusInput/>
    <RenderCount/>
    <PreviousValue/> */}
      
    </>
  )
}

export default App
