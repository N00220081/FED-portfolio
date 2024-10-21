import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";


// pages
import Home from "./pages/Home";

const App = () => {
 return(
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
    </>
 );
}

export default App;