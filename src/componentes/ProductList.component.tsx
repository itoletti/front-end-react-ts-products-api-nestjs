import React, { SyntheticEvent } from 'react';
import {Product} from '../interfaces/product';
import axios from 'axios';
import { Link } from 'react-router-dom';

const productos: Product[] = []

export default class ProductList extends React.Component {
 
  state = {productos}

  async getProducts(){
    const res = await axios.get("http://localhost:3000/product");
    console.log(res);
    this.setState({productos: res.data});
  }

  componentDidMount(){
    this.getProducts();
    console.log(this.state.productos);
  }

  async deleteProduct(id: string, e: SyntheticEvent) {
    const res = await axios.delete("http://localhost:3000/product/" + id);
    console.log(res);
    this.getProducts();
  }

  render(): JSX.Element {
    return(
      <div>
        {
          this.state.productos.map((producto: Product) =>
            <div className="card card-body mb-2"  key={producto._id}>
              <div className="row">
                <div className="col-md-8">
                  <ul>
                    <li>nombre: {producto.name}</li>
                    <li>descripcion: {producto.description}</li>
                    <li>precio: {producto.price}</li>
                    <li>Creatdo el: {producto.createAt}</li>
                  </ul>
                  <button className="btn btn-danger" onClick={(e: SyntheticEvent) => this.deleteProduct(producto._id!, e)}>Delete</button>
                  <Link className="btn btn-secondary" to={`/product/create/${producto._id}`}>Edit</Link>                  
                </div>
                <div className="col-md-4">
                  <img src={producto.imageURL} className="card-img" alt="imagen perdida"/>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )  
  }  
}