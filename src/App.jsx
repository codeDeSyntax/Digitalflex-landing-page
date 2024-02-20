import Navbar from "./components/Navbar"
import WelcomeText from "./components/WelcomeText"
import Values from "./components/Values"
import WhatWeDo from "./components/WhatWeDo"
import Services from "./components/Services"
import WhatWeDeliver from "./components/WhatWeDeliver"
function App() {
  return (
    <>
    <main className='w-full h-screen bg-[url(boyworking.jpg)] bg-cover '>
      <Navbar/>
      <WelcomeText/>
      <Values/>
    </main>
    <WhatWeDo/>
    <Services/>
    <WhatWeDeliver/>
    
    </>
    
  )
}

export default App
