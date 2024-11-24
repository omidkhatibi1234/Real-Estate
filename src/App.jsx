import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonails from "./components/Testimonails";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonails />
    </div>
  );
};

export default App;
