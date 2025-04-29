import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateCart from './pages/CreateCart';
import JoinCart from './pages/JoinCart';
import CartRoom from './pages/CartRoom';
import './index.css';

function App() {
    return ( 
        <Router>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<CreateCart />}/>
            <Route path="/join" element={<JoinCart />} />
            <Route path="/cart/:cartId" element={<CartRoom />} />


          </Routes>
        </Router>
     );
}


export default App;