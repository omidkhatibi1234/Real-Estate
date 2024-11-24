import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonails from "./components/Testimonails";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
    </div>
  );
};

export default App;
