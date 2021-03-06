import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import Trips from '../components/Trips'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import Email from "../components/Email"
import Metadata from "../components/metadata"

const IndexPage = () => (
  <Layout>
    <Metadata title="Home" description="This is my home page" />
    <SEO title="Home" />
    <Hero />
    <Trips  heading="Our Favourite Destinations"/>
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
