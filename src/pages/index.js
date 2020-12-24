import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FluidImage from "../components/fluid-image"
import FixedImage from "../components/fixed-image"

import Content from "../components/content"
import SEO from "../components/seo"

import Elipse from "../svgs/elipse.svg"

import { scale } from '../utils/typography'


const IndexPage = () => (

  
 <Layout>
    <SEO title="Home" />



    <div class="relative ">
        <FluidImage class="absolute" imageName="front.jpg" style={{height: "100vh"}}>
        </FluidImage>
      
      <div style={{transform: 'translate(-50%, -50%)'}}  class="text-right absolute z-10 top-1/2 left-1/2 text-white">
        <h1>
          <span class="block font-montserrat text-left uppercase text-xs md:text-3xl ml-4 lg:ml-24">Cafe Restaurant</span>
          <span class="block mb-2 font-serif text-5xl p-2 mr-4 mt-2 xl:mr-16 md:text-9xl bg-gray-200 bg-opacity-30">HELVETICA</span>
          <span class="block font-serif text-5xl ml-4 p-2 xl:ml-16 md:text-9xl bg-gray-500 bg-opacity-30">STANDARD</span>
          <span class="block font-montserrat mt-2 text-sm md:text-4xl lg:mr-24">Duis aute irure dolor in</span>
        </h1>
      </div>
    </div>
    
    <div class="my-20 mx-4 xl:mx-20 grid grid-cols-1 xl:grid-cols-8 ">
      <p class="text-2xl  font-montserrat xl: text-4xl xl:col-span-4 xl:col-start-2 xl:transform z-10 xl:bg-white ">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div class="row-start-2 xl:row-start-3 xl:col-span-4 xl:col-start-3 xl:transform xl:-translate-y-24 my-3   ">
       <FluidImage imageName="img1.jpg"/>
      </div>
      <p class="xl:row-start-2 xl:col-start-2  xl:col-span-3 xl:transform  xl:bg-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuxlod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...
      </p>
      <p class=" font-montserrat text-4xl xl:row-start-4 xl:col-span-2 xl:col-start-6 xl:transform xl:-translate-y-36 xl:bg-white">
      consectetur adipiscing elit.
      </p>
    </div>



  </ Layout>
  
)

export default IndexPage
