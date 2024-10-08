import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/services/Services";
import Works from "./components/Works/works";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
