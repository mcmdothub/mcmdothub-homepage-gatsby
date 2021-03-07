import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from '../components/Trips'
import Metadata from "../components/metadata"

const TripsPage = () => (
  <Layout>
    <Metadata title="Trips" description="Trips" />
    <SEO title="Trips" />
    <Trips  heading="Our Favourite Destinations"/>
  </Layout>
)

export default TripsPage
