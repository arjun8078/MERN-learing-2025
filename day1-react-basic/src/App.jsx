import { Counter } from "./components/Counter";
import { Header } from "./components/Header"
import { Productlist } from "./components/ProductList";
import { TodoList } from "./components/Todo";
import { UseCard } from "./components/UseCards";



function App() {

const users = [
    { name: 'Alice Johnson', role: 'Frontend Dev', email: 'alice@example.com' },
    { name: 'Bob Smith', role: 'Backend Dev', email: 'bob@example.com' }
  ];
  return (
    <>
    <div>
       <Header title="Day 1 - React with JavaScript" 
        subtitle="Improving my JavaScript skills! 🚀"/>

    </div>
   <main style={{ padding: '20px' }}>
       <h2>Team Members</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
  {users.map((user,index)=>(
        <UseCard key={index} user={user}/>
      ))}
        </div>
            
    <Productlist/>
         <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Interactive Counter</h2>
        <Counter/>

        <TodoList/>
      </main>

 <footer style={{ 
        textAlign: 'center', 
        padding: '20px',
        backgroundColor: '#282c34',
        color: 'white',
        marginTop: '40px'
      }}>
        <p>✅ Day 1 Complete! Built on {new Date().toLocaleDateString()}</p>
      </footer>


    </>
  )
}

export default App
