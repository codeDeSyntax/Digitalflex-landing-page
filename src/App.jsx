import Navbar from "./components/Navbar";
import WelcomeText from "./components/WelcomeText";
import Values from "./components/Values";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import WhatWeDeliver from "./components/WhatWeDeliver";
import WhatOthersSay from "./components/WhatOthersSay";
import IndustriesWeServe from "./components/IndustriesWeServe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className={`w-full md:h-screen h-[130vh]   bg-cover main`}>
        <Navbar />
        <WelcomeText />
        <Values />
      </main>
      <WhatWeDo />
      <Services />
      <WhatWeDeliver />
      <WhatOthersSay />
      <IndustriesWeServe />
      <Footer />
    </>
  );
}

export default App;
