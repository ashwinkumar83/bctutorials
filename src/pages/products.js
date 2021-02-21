import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ProductList from "../components/product-list"
const ProductPage = () => (
  <Layout>
    <h1>Products</h1>
    <p>Welcome to the new Gatsby site.</p>

    <ProductList />
   
  </Layout>
)

export default ProductPage
