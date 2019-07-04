import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () =><div style={{ color: `purple`, fontSize: `32px` }}>
<Header headerText="neil's sick gatsby site"/>
<Layout>
<Container>
 <Link to="/contact/">Contact</Link>
 <Link to="/about/">About</Link>
 <Link to="/about-css-modules/">CSS</Link>

 <hr/>

<img src="https://source.unsplash.com/random/400x200" alt="" />



<hr/>
<p>Here is a juicy image!</p>
</Container>
</Layout>
</div>
