import { useState } from "react";
import Header from "./components/Header";
import Top from "./components/Top";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import SlideNav from "./components/SlideNav";

function App() {
  const [isNavOn, setIsNavOn] = useState(false);

  const onNavChanged = () => {
    setIsNavOn((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header onNavChanged={onNavChanged} />
      {isNavOn && <SlideNav onNavChanged={onNavChanged} />}
      <Top />
      <div className="px-6 sm:px-8 md:px-14 lg:px-16">
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
