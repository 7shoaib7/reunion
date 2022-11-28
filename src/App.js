import './App.css';
import Navbar from "./components/Navbar"
import {Routes,Route} from"react-router-dom";
import Rent from "./components/Rent"

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
        <Route path="/rent" element={<Rent/>}/>
       </Routes>
    </div>
  );
}

export default App;
