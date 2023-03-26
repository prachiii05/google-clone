
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from './pages/home';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        {/* <Route exact path=''></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
