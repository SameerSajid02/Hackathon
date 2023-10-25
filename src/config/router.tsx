import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from '../screens/signup';
import Login from '../screens/login';
import Home from '../screens/home';
import Donor from '../screens/donor';
import Acceptor from '../screens/acceptor';

export default function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/home/:id/*" element={<Home/>}/>
                <Route path="/donor" element={<Donor/>}/>
                <Route path="/acceptor/:id" element={<Acceptor/>}/>
            </Routes>
        </Router>
        </>
    )
}