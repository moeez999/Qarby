import "./App.css";
import CarDecision from "./components/carDecisions";
import FAQ from "./components/faqs";
import Hero from "./components/hero";
import JoinQr from "./components/JoinQarby";
import MeetQr from "./components/meetQr";
import Navbar from "./components/navbar";
import Partners from "./components/partners";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partners />
      <MeetQr />
      <CarDecision />
      <JoinQr />
      <Testimonial />
      <FAQ />
    </div>
  );
}

export default App;
