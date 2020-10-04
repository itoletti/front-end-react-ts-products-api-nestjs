import React, { SyntheticEvent } from 'react';
import { Product } from '../interfaces/product';
import axios from 'axios';

const producto: Product = {
  name: '',
  description: '',
  price: 0,
  imageURL: ''
}

export default class ProductForm extends React.Component {

  state = producto

  //edit=true -> update - edit=false -> create
  private edit = false
  
  //private params: any = null;

  // getParams = () => {
  //   this.params = (this.props as any).match.params;
  //   this.params.match.params.id;
  // }
  
  async componentDidMount() {
    const params = (this.props as any).match.params;
    console.log(params.id);
    if (Object.entries(params).length !== 0) {
      const res = await axios.get("http://localhost:3000/product/"+ params.id);
      //console.log(res);
      this.setState(res.data);
      this.edit = true; 
    }  
  }

  updateProduct = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await axios.put("http://localhost:3000/product/" + this.state._id, this.state);
    console.log(res);
    console.log("actualizando producto");
    (this.props as any).history.push('/product');   
  }

  submitProduct = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/product/", this.state);
    console.log(res);
    console.log("creando producto");
    (this.props as any).history.push('/product');
  }

  // onChange = (e: { target: { name: string; value: string; }; }) => {
  //   const {name, value} = e.target;
  //   this.setState({[name]: value})
  // }

  onChange = (e: any) => {
    const nombre: string = e.target.name;
    const valor: string = e.target.value;
    this.setState({[nombre]: valor});
  }


  render(): JSX.Element {
    return (
      <div className="row">
        <div className="col-sm-4 offset-dm-4">
          <div className="card card-body">
            <form onSubmit= {this.edit ? this.updateProduct : this.submitProduct}>
                <div className="form-group">
                  <input type="text" name="name" value={this.state.name} onChange={this.onChange}
                    className="form-control" placeholder="Nombre Producto" autoFocus/>
                  </div>
                <div className="form-group">
                  <input type="text" name="description" value={this.state.description} onChange={this.onChange}
                    className="form-control" placeholder="Descripcion"/>
                </div>
                <div className="form-group">
                  <input type="text" name="price" value={this.state.price} onChange={this.onChange}
                    className="form-control" placeholder="Precio"/>
                </div>
                <div className="form-group">
                  <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.onChange}
                    className="form-control" placeholder="URL Imagen"/>
                </div>
                <button className="btn btn-primary btn-block" >
                  Save
                </button>
            </form>
          </div>  
        </div>
      </div>
    )
  }
}