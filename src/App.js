import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import ComingSoon from "./Pages/ComingSoon";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/soon' element={<ComingSoon />}/>
      </Routes>
    </Router>
  );
}
 
export default App;