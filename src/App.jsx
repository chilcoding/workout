import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Exercise from "./pages/Exercise";
import Yoga from "./pages/Yoga";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/yoga" element={<Yoga />} />
      </Routes>
    </Router>
  );
}

export default App;
