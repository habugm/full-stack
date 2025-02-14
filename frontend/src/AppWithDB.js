import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const baseURL = "http://localhost:5000/api"
  const [user,setUser]=useState('Heyab');
  const [products,setProducts]=useState([]);
  const [newProduct,setNewProduct]=useState({name:'',quantity:'',price:''});

  useEffect(() => {    
    updateName();
    fetchProducts();
  }, []);

  async function handleCreateProduct(e){

    e.preventDefault();//page not to refresh
    console.log(newProduct);
    const response = await axios.post(baseURL+"/products",newProduct);
    console.log(response.data);
    setProducts([...products,response.data])

  }

  function handleChange(e){
    setNewProduct({...newProduct,[e.target.name]:e.target.value})
  }

function updateName(){
setUser('Naod')
}
const fetchProducts = async () => {
  const response = await axios.get(baseURL+"/products");
  setProducts(response.data);
  //console.log(response.data);
}
  return (
    <div className="container mt-3">
      <h1>Products Management</h1>
      <form>
        <div className='mb-3'>
            <label className='form-label'>Enter Name</label>
            <input className='form-control' type="text" name='name' value={newProduct.name}
            onChange={handleChange}></input>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Enter Quantity</label>
            <input className='form-control' type="text" name='quantity' value={newProduct.quantity}
            onChange={handleChange}></input>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Enter Price</label>
            <input className='form-control' type="text" name='price' value={newProduct.price}
            onChange={handleChange}></input>
        </div>
        <button type='button' onClick={handleCreateProduct} className='btn btn-primary'>Add</button>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
