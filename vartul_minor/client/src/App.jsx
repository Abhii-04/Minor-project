import Home from "./pages/Home";
import Services from './pages/Services'
import Contact from "./pages/Contact"
import About from "./pages/About"
import Navbar from "./components/Navabr/Navbar"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/About" element = {<About/>}/>
          <Route exact path = "/Contact" element = {<Contact/>}/>
          <Route exact path = "/services" element = {<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
