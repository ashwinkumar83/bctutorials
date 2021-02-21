import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ProductList from "../components/product-list"
const IndexPage = () => (
  <Layout>
    <h1>Hello Learners</h1>
    <p>Welcome to the new Gatsby site.</p>
    <Link to="/products">View my Products</Link>
  </Layout>
)

export default IndexPage
