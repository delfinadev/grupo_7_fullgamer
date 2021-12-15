import { useState, useEffect } from 'react'

function ProductList() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('/api/product.js')
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
                <th>

        <div className="delete-product">
            <form action={`http://localhost:3030/admin/${product.id}/delete?_method=DELETE`} method="POST">
                <button className="delete" type="submit">Borrar producto</button>
            </form>
        </div>

        <div className="edit-product">
            {<a href={`http://localhost:3030/admin/${product.id}/edit`}>Editar producto</a>}
        </div>
                </th>
                </tr>
            )
          })

        }
      </table>
    </div>
  )
}

export default ProductList;