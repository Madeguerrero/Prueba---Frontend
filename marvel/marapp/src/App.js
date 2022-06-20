import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
