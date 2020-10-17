import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Contact from "../components/sections/contact"
import Team from "../components/sections/team"
import Solution from "../components/sections/solution"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Features />
    <Solution />
    <Team />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
