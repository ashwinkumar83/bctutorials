import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Thumbnail from "../components/thumbnail"
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'

const ProductList = () => {
  const data = useStaticQuery(graphql`
  {
    allBigCommerceProducts {
      nodes {
       
        price
        name
       
      }
    
  }

}`)
return (
<main>
  
<h2 className="text-center">Featured Products</h2>
<hr></hr>

<div class="row">

{data.allBigCommerceProducts.nodes.map(product => 
<div className="col-sm-4"  style={{"padding-bottom":"50px"}}  >
<div className="card" style={{width:"240px"}} >
<Thumbnail image="https://www.printwand.com/blog/media/2012/01/ultimate-guide-to-your-product-launch.jpg" ></Thumbnail>

  <div className="card-body">

    <h5 className="card-title">{product.name}</h5>
   
    <p className="card-text">price {product.price}$ each</p>
  
   <a href="product.custom_url.url" class="btn btn-primary">View</a>
  
  </div>
</div>
</div>
)}
</div>
</main>

)
}


export default ProductList