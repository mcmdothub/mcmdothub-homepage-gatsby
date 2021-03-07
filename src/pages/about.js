import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import Metadata from "../components/metadata"

const About = () => (
  <Layout>
    <Metadata title="About Us" description="About Us" />
    <SEO title="About Us" />

    <Testimonials />
    <Stats />

    
  </Layout>
)

export default About
