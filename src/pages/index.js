import React from "react"
import Layout from "../components/layout"
import FluidImage from "../components/fluid-image"
import {
  MenuItem,
  MenuTitle,
  MenuSubtitle,
  MenuEl,
} from "../components/menu-item"
import SEO from "../components/seo"
import { css, cx } from "@emotion/css"
import Navbar from "../components/navbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <div class="relative ">
      <div
        class={css`
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0) 80%,
            rgba(0, 0, 0, 0.5) 100%
          );
        `}
      ></div>
      <FluidImage
        class="absolute"
        imageName="front.jpg"
        style={{ height: "100vh" }}
      ></FluidImage>

      <div
        style={{ color: "#edeae4" }}
        class="text-center absolute z-10 top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="font-serif tracking-widest text-5xl xl:text-9xl">
          <span class="block mb-3  ">HELVETICA</span>
          <span class="block">STANDARD</span>
        </h1>
      </div>
    </div>
    <div
      id="about"
      style={{ backgroundColor: "#FFFFFF", color: "#69707d"}}
      class="px-4 xl:px-40 relative py-20 xl:pt-40 font-serif "
    >

      <div class=" h-full grid grid-cols-1 xl:grid-cols-8 ">
        <div
          class="xl:col-span-4 xl:col-start-2 z-20 xl:p-1 bg-white"
        >
          <p class="inline-block z-10 text-2xl xl:text-6xl mb-1 ">
            Coffee + Stories = Helvetica Standard
          </p>
        </div>

        <div class="z-10 row-start-2 xl:row-start-3 xl:col-span-4 xl:col-start-3 xl:transform xl:scale-125">
          <FluidImage imageName="img1.jpg" />
        </div>

        <p
          class={cx(
            css`
              :after {
                display: inline-block;
                content: "";
                border-top: 0.1rem solid black;
                width: 100%;
                transform: translateY(-1rem);
              }
            `,
            `bg-white z-20 text-4xl mt-4 xl:text-5xl xl:row-start-4 xl:p-2 xl:col-span-2 xl:col-start-6 `
          )}
        >
          What stories do you need to tell today?
        </p>
        <div class="xl:col-span-3 xl:col-start-6 xl:row-start-3">
          <FluidImage imageName="img2.jpg" />
        </div>
      </div>
    </div>

    <div
      style={{ backgroundColor: "#1d1f1e" }}
      class="p-4 xl:py-36 py-24 relative"
    >
      <div class="hidden xl:block absolute top-0 left-0 text-white text-9xl mx-4">
        +
      </div>
      <div class="absolute top-0 right-0 text-white text-9xl mx-4">+</div>
      <div class="hidden absolute xl:block bottom-0 left-0 text-white text-9xl mx-4">
        +
      </div>
      <div class="hidden absolute xl:block bottom-0 right-0 text-white text-9xl mx-4">
        +
      </div>

      <div id="menu" class="xl:px-20">
        <div class="p-4 inline-block my-10 xl:mb-15 text-white font-serif text-6xl border-2">
          <p class="">Helvetica</p>
          <div class="">Menu</div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-6 ">
          <div class="xl:col-span-2">
            <MenuSubtitle subtitle="Coffee" />
            <MenuEl price="2.30" item1="Cappucino" />
            <MenuEl price="2.20" item1="Latte" />
            <MenuEl price="2.00" item1="Americano" />
            <MenuEl price="2.50" item1="Flat White" />
            <MenuEl price="3.00" item1="Mocha" />
            <MenuEl price="2.20" item1="Iced Coffee" />
            <MenuSubtitle subtitle="Tea" className="mt-5" />
            <MenuEl price="1.50" item1="Helvetica Blend" />
            <MenuEl price="1.50" item1="Oolong" />
            <MenuEl price="2.00" item1="Milk tea" />
          </div>

          <div class="xl:col-span-4">
            <MenuSubtitle subtitle="Brunch" />
            <MenuItem
              price="5.30"
              item1="Full Breakfast"
              item2="Breakfast meal with thick cut bacon, sausages and eggs, and served with toast and hash browns."
            />
            <MenuItem
              price="4.00"
              item1="Atlantic Melt"
              item2="Tuna mayo & melted cheddar chese."
            />
            <MenuItem
              price="3.50"
              item1="Mumbai Melt"
              item2="Chicken marinaded in madras and tandoori spiced mayo, melted cheddar & sweet chilli sauce."
            />
            <MenuItem
              price="3.80"
              item1="Saucy Meatball Sub & Seasoned Fries"
              item2="Pork meatballs, gherkins, garlic mayo, american cheese & torpedo roll."
            />
            <MenuItem
              vegan
              price="3.80"
              item1="Soups"
              item2="Tomato, French Onion, Carrot & Coreander, inquire about today's special. Served with artisan bread."

            />
          </div>
        </div>
      </div>
    </div>

    <div id="contact" class="p-4 py-24 xl:p-40 font-montserrat">
      <div class="grid justify-center grid-cols-2 items-center">
        <div>
          <FluidImage imageName="cafe.jpg" />
        </div>
        <div class="p-4 xl:p-20 ">
          <p>We can be found at New Bridge St W, Newcastle-upon-tyne, NE18EF</p>
          <a href="" class="underline">
            See on Google Maps
          </a>
          <p class="mt-4">+44 7700 900796</p>
        </div>
      </div>
    </div>

    <div class="text-center grid grid-cols-1 lg:grid-cols-2 xl:divide-x xl:grid-cols-3 p-4 font-montserrat">
      <div class="p-6">
        <div>
          <p>Download our menu</p>
        </div>
        <div>
          <p>Questions & Answers</p>
        </div>
        <div>
          <p>Where to find us</p>
        </div>
        <div>
          <p>Data Privacy Statement</p>
        </div>
      </div>
      <div class="p-6">
        <p>Keep up with Helvetica Standard</p>
        <form>
          <input type="text" class="border-2 p-4 m-2" value="Your email here" />
          <input type="submit" class="p-4" value="Submit" />
        </form>
      </div>
      <div>
        <div class="p-4 inline-block text-3xl">
          <p class="">Helvetica</p>
          <p class="">Standard</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
