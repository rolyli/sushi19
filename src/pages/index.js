import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from "../components/hero"
import Content from "../components/content"
import SEO from "../components/seo"

const IndexPage = () => (

 <Layout>
    <SEO title="Home" />
    <Hero />

    <Content>
      <div class="flex">
        <p class="flex-initial">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p class="flex-initial">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </Content>

  </Layout>
  
)

export default IndexPage
