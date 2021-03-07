import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Email from "../components/Email"
import Metadata from "../components/metadata"

const Contact = () => (
  <Layout>
    <Metadata title="Contact" description="Contact" />
    <SEO title="Contact" />
    
    <Email />
    
  </Layout>
)

export default Contact
