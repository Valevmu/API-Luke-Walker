import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import axios from 'axios';
import Home from "./Views/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
