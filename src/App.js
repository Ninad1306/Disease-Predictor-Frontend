import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prediction from './Components/Prediction';
import Home from './Components/Home';
import Treatment from './Components/Treatment';
import Result from './Components/Result';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path="/prediction" element={<Prediction/>} />
        <Route exact path="/treatment" element={<Treatment/>} />
        <Route exact path="/result" element={<Result/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
