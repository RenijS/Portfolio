import Header from "./components/Header";
import Top from "./components/Top";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <div className="px-16">
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
