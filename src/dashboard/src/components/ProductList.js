import { useState, useEffect } from 'react';

export default function ProductList(){

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProduct(data.product)
      })
  }, [])

  return (    
    <div className="div-table">
      <table className="table">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>actions</th>
        </tr>

    {
      product.map(product => {
        return (
          <tr>
            <th> {product.id} </th>
            <th> {product.name}</th>
            <th> {product.category_id} </th>
            <th> {product.price} </th>
            <th> {product.description} </th>
          </tr>
            )
          })
        }
      </table>
    </div>
  );
  
}

