import Navbar from "./components/Navbar"
import WelcomeText from "./components/WelcomeText"
import Values from "./components/Values"
function App() {
  return (
    <main className='w-full h-screen bg-[url(boyworking.jpg)] bg-cover '>
      <Navbar/>
      <WelcomeText/>
      <Values/>
    </main>
    
  )
}

export default App
