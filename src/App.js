import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import CreateEvent from './components/Events/eventForm';
import Admin from './components/adminPage/admin';
import EventConfirm from './components/Events/eventCofirmation';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateEvent />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/eventconfirmation' element={<EventConfirm />} />
      </Routes>
  );
}

export default App;
