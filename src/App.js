import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigations";
import FormComponent from "./components/FormValidation";
import Pokemon from "./components/Pokemon";
import Function1 from "./components/Function1";
import Function2 from "./components/Function2";
import Function3 from "./components/Function3";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<FormComponent />} exact />
          <Route path="/Pokemon" element={<Pokemon />} />
          <Route path="/Function1" element={<Function1 />} />
          <Route path="/Function2" element={<Function2 />} />
          <Route path="/Function3" element={<Function3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
