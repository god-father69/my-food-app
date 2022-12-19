import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Homebody from './components/Homebody';
import Menu from './components/Menu';
import FoodCard from './components/FoodCard';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homebody />}>
        </Route>
        <Route path="/Menu" element={<Menu />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
