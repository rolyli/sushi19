import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FluidImage from "../components/fluid-image"
import FixedImage from "../components/fixed-image"
import { MenuItem, MenuTitle, MenuSubtitle, MenuEl } from "../components/menu-item"

import Content from "../components/content"
import SEO from "../components/seo"

import Elipse from "../svgs/elipse.svg"

import { scale } from '../utils/typography'

import { css, cx } from '@emotion/css'


const IndexPage = () => (

  
 <Layout>
    <SEO title="Home" />



    <div class="relative ">
      <FluidImage class="absolute" imageName="front.jpg" style={{height: "100vh"}}>
      </FluidImage>
      
      <div style={{transform: 'translate(-50%, -50%)'}}  class="text-right absolute z-10 top-1/2 left-1/2 text-white">
        <h1>
          <span class="block font-montserrat text-left uppercase text-xs lg:text-3xl ml-4 lg:ml-24">Cafe Restaurant</span>
          <span class="block mb-2 font-serif text-5xl p-2 mr-4 mt-2 xl:mr-16 lg:text-9xl bg-gray-200 bg-opacity-30">HELVETICA</span>
          <span class="block font-serif text-5xl ml-4 p-2 xl:ml-16 lg:text-9xl bg-gray-500 bg-opacity-30">STANDARD</span>
          <span class="block font-montserrat mt-2 text-sm lg:text-4xl lg:mr-24">Duis aute irure dolor in</span>
        </h1>
      </div>
    </div>
    
    <div class="relative p-4 my-20 ">
      <div class="lg:w-3/4 lg:mx-auto h-full grid grid-cols-1 lg:grid-cols-8 ">
        <p class="z-20 text-2xl font-montserrat lg: text-3xl lg:col-span-4 lg:col-start-2 lg:transform  lg:bg-white">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="z-10 row-start-2 lg:row-start-3 lg:col-span-4 lg:col-start-3 lg:transform lg:scale-110   ">
        <FluidImage imageName="img1.jpg"/>
        </div>
        <p class="z-20 font-serif lg:text-xl lg:row-start-2 lg:col-start-2 lg:col-span-3 lg:bg-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiulgod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...
        </p>
        <p class={cx(css`
          :after {
            display: inline-block;
            content: "";
            border-top: .1rem solid black;
            width: 100%;
            transform: translateY(-1rem);
          }
        `, `z-20 font-montserrat text-4xl mt-4 lg:text-5xl lg:row-start-4 lg:col-span-2 lg:col-start-6 scale-125 lg:bg-white`
          )}
          
        >
        consectetur adipiscing elit.
        </p>
        <div class="lg:col-span-3 lg:col-start-6 lg:row-start-3">
          <FluidImage imageName="img2.jpg" />
        </div>
      </div>
    </div>

    <div style={{backgroundColor: '#9DAF94'}} class="p-4 xl:py-36 py-24 relative">

      <div class="invisible xl:visible absolute top-0 left-0 text-white text-9xl">+</div>
      <div class="absolute  top-0 right-0 text-white text-9xl">+</div>
      <div class="invisible absolute xl:visible bottom-0 left-0 text-white text-9xl">+</div>
      <div class="invisible absolute xl:visible bottom-0 right-0 text-white text-9xl">+</div>

      
      <div class="xl:w-3/4 xl:mx-auto">
        
        <div class="p-4 inline-block my-10 xl:mb-15 text-white font-serif text-7xl border-2">
          <p class="">Helvetica</p>
          <div class="">Menu</div>
        </div>

        <div   data-sal="slide-up"
        data-sal-duration="1000"
  data-sal-easing="ease" class="grid grid-cols-1 xl:grid-cols-6 ">
          <div>
          <MenuSubtitle subtitle="Coffee" />
          <MenuEl item1="Cappucino" />
          <MenuEl item1="Latte"/>
          <MenuEl item1="Americano"/>
          </div>

          <div>
          <MenuSubtitle subtitle="Tea" />
          <MenuEl item1="Helvetica Blend :)" />
          <MenuEl item1="Oolong"/>
          <MenuEl item1="Milk tea"/>
          </div>

          <div class="xl:col-span-4">
          <MenuSubtitle subtitle="Breakfast" />
          <MenuItem item1="Bacon Sandwich" item2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" divide />
          <MenuItem item1="Tomato Soup" item2="quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" divide />
          <MenuItem item1="Omelette" item2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" divide />
          </div>
        </div>
      </div>
    </div>
  </ Layout>
  
)

export default IndexPage
