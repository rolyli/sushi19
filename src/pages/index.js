import React from "react"
import Layout from "../components/layout"
import FluidImage from "../components/fluid-image"
import { MenuItem, MenuTitle, MenuSubtitle, MenuEl } from "../components/menu-item"
import SEO from "../components/seo"
import { css, cx } from '@emotion/css'
import Navbar from "../components/navbar"


const IndexPage = () => (

  
 <Layout>
    <SEO title="Home" />
    <div class="relative ">
    <Navbar />
    <div class={css`
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, rgba(0,0,0,0.5) 100%);
      `}>
      </div>
      <FluidImage class="absolute" imageName="front.jpg" style={{height: "100vh", }}>
      </FluidImage>
      
      <div class="text-right absolute z-10 top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2">
        <h1>
          <span class="block mb-3 font-serif text-5xl xl:text-9xl ">HELVETICA</span>
          <span class="block font-serif text-5xl xl:text-9xl ">STANDARD</span>
        </h1>
      </div>
    </div>
    
    <div class="relative p-4 my-20 ">
      <div class="xl:w-3/4 xl:mx-auto h-full grid grid-cols-1 xl:grid-cols-8 ">
        <div data-sal="slide-up" data-sal-duration="1000" class="xl:col-span-4 xl:col-start-2 z-20 xl:bg-white xl:p-8">
          <p class="z-20 text-2xl font-serif xl:text-4xl mb-1">
            Excepteur sint occaecat cupidatat non proident
          </p>
          <p class="font-montseratt xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiulgod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...
          </p>
        </div>

        <div  class="z-10 row-start-2 xl:row-start-3 xl:col-span-4 xl:col-start-3 xl:transform xl:scale-110">
        <FluidImage imageName="img1.jpg"/>
        </div>

        <p  data-sal="slide-up" data-sal-duration="1000" class={cx(css`
          :after {
            display: inline-block;
            content: "";
            border-top: .1rem solid black;
            width: 100%;
            transform: translateY(-1rem);
          }
        `, `z-20 font-montserrat text-4xl mt-4 xl:text-5xl xl:row-start-4 xl:col-span-2 xl:col-start-6 xl:bg-white`
          )}
          
        >
        consectetur adipiscing elit.
        </p>
        <div class="xl:col-span-3 xl:col-start-6 xl:row-start-3">
          <FluidImage imageName="img2.jpg" />
        </div>
      </div>
    </div>

    <div style={{backgroundColor: '#9DAF94'}} class="p-4 xl:py-36 py-24 relative">

      <div class="hidden xl:block absolute top-0 left-0 text-white text-9xl">+</div>
      <div class="absolute  top-0 right-0 text-white text-9xl">+</div>
      <div class="hidden absolute xl:block bottom-0 left-0 text-white text-9xl">+</div>
      <div class="hidden absolute xl:block bottom-0 right-0 text-white text-9xl">+</div>

      
      <div class="xl:mx-20">
        
        <div class="p-4 inline-block my-10 xl:mb-15 text-white font-serif text-6xl border-2">
          <p class="">Helvetica</p>
          <div class="">Menu</div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-6 ">
          <div class="xl:col-span-2">
          <MenuSubtitle subtitle="Coffee" />
          <MenuEl price="2.30" item1="Cappucino" />
          <MenuEl price="2.20" item1="Latte"/>
          <MenuEl price="2.00" item1="Americano"/>
          <MenuEl price="2.50" item1="Flat White" />
          <MenuEl price="3.00" item1="Mocha" />
          <MenuEl price="2.20" item1="Iced Coffee" />
          <MenuSubtitle subtitle="Tea"  className="mt-5" />
          <MenuEl price="1.50" item1="Helvetica Blend" />
          <MenuEl price="1.50" item1="Oolong"/> 
          <MenuEl price="2.00" item1="Milk tea"/>
          </div>

          <div class="xl:col-span-4">
          <MenuSubtitle subtitle="Brunch" />
          <MenuItem price="5.30" item1="Full Breakfast" item2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" />
          <MenuItem price="4.00" item1="Bacon Sandwich" item2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"  />
          <MenuItem vegan price="3.80" item1="Tomato Soup" item2="quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
          <MenuItem price="3.50" item1="Omelette" item2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"  />
          </div>
        </div>
      </div>
    </div>
  </ Layout>
  
)

export default IndexPage
