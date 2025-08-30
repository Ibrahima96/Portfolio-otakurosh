import Header from "./components/Header";
import Mission, { Mission2, Mission3 } from "./components/Mission";
import Missions from "./components/Missions/Missions";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="container sm:px-16 px-4 mx-auto py-2">
        <Header />
        <Missions>
          <Mission />
          <Mission2 />
          <Mission3 />
        </Missions>
        <Experience />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
