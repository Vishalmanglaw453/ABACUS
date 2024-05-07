
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Servis from "./componets/Servis";
import Working from "./componets/Working";
import Contect from "./componets/Contect";
import Footer from "./componets/Footer";
import Testimonials from "./componets/Testimonials";
import Having from "./componets/Having";
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About/>
      <Servis/>
      <Working/>
      <Testimonials/>
      <Having/>
      <Footer/>
    </div>
  );
}

export default App;
