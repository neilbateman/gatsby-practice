import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"
export default () => (
  <div style={{ color: `teal` }}>
  <Layout>
    <Header headerText="About Gatsby"/>
    <Link to="/">Home</Link>
    <p>Such wow. Very React.</p>
    </Layout>
  </div>
)
