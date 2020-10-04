import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar.component';
import ProductList from './componentes/ProductList.component';
import ProductForm from './componentes/ProductForm.component';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container p-4">
        <Route path='/' exact component={ProductList}></Route>
        <Route path='/product' exact component={ProductList}></Route>
        <Route path='/product/create' exact component={ProductForm}></Route>
        <Route path='/product/create/:id' exact component={ProductForm}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
