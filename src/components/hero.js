import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const image = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
            
          }
        }
      }
    }
  `)

  return (
    <div>
      Sushi19
      <Img fluid={image.fileName.childImageSharp.fluid} alt="" />

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  )
}

export default Hero;