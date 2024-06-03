import Logo from "../src/constants/svg/logo.svg";
import "./App.css";
import Banner from "./components/layout/Banner/Banner";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Ada from "./components/main/Ada/Ada";
import Features from "./components/main/Features/Features";
import PricePlan from "./components/main/PricePlan/PricePlan";
import Service from "./components/main/Service/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Service />
        <Features />
        <PricePlan />
        <Ada />
      </main>
      <Footer />
    </div>
  );
}

export default App;
