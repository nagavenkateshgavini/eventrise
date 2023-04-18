import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateEvent from "./components/createEvents/eventForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateEvent />} />
    </Routes>
  );
}

export default App;
