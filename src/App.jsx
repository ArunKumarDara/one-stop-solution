import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
