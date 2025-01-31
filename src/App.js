// App.js
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={<AllProducts/>} />
        <Route path="/product/:productId" component={<ProductDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
