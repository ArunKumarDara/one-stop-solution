import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
// import Services from "./components/Services/Services";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Banner2 from "./components/Banner/Banner2";
// import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Offer />
    </div>
  );
};

export default App;
