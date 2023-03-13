import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
