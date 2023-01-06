import Header from "./components/Header";
import Top from "./components/Top";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <div className="px-16">
        <About />
        <Portfolio />
        <Resume />
      </div>
    </div>
  );
}

export default App;
