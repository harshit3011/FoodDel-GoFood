import './App.css';
import Home from './Screens/Home';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Screens/Login';
import Signup from './Screens/Signup';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './Components/ContextReducer';

function App() {
  return (
    <CartProvider>
      <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home></Home>}/>
        <Route exact path="/login" element={<Login></Login>}/>
        <Route exact path="/createuser" element={<Signup></Signup>}/>
      </Routes>
      </div>
    </Router> 
    </CartProvider>
    
  );
}

export default App;
