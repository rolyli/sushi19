import React from "react"
import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { jsx, css, keyframes } from "@emotion/react"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import { TweenMax } from "gsap"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [isFirstPress, setFirstPress] = useState(true)

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#navbar", {
      scrollTrigger: {
        start: "top top",
        end: "top top",
        scrub: true,
        duration: 2,
        trigger: "#about",
      },
      y: 73.2,
      position: "fixed",
    })
  }, [])

  const handleClick = () => {
    setFirstPress(false)
    setOpen(!isOpen)
  }

  const BurgerSlice = styled.div`
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
  `

  const BurgerMenu = () => (
    <div
      css={css`
        position: fixed;
        margin: 1rem;
        cursor: pointer;
        z-index: 50;
      `}
      onClick={handleClick}
    >
      <BurgerSlice />
      <BurgerSlice />
      <BurgerSlice />
    </div>
  )

  const MenuEl = props => {
    return (
      <div
        css={css`
          & {
            margin-left: ${props.margin}vw;
            font-family: lora;
            font-size: 7rem;
            color: #395442;
            cursor: pointer;
            transition: all .2s ease-in-out;
          }
          
          &:hover {
            transform: scale(1.05)
          }

          @media screen and (max-width: 1000px) {
            font-size: 3rem;
          }
        `}
        onClick={() => {
          if (props.to) {
            TweenMax.to(window, { duration: 1, scrollTo: `#${props.to}` })
            setOpen(!open)
          }
        }}
      >
        {props.children}
      </div>
    )
  }

  const open = keyframes`
        from {
            height: 0vh;
        }
        to {
            height: 100vh;
        }
    `

  const close = keyframes`
    from {
        height: 100vh;
    }
    to {
        height: 0;
    }
`

  return (
    <div
      css={[
        css`
          background-color: red;
          position: relative;
          z-index: 40;
        `,
      ]}
    >
      <div>
        <div
          id="navbar"
          css={css`
            width: 100%;
            height: 73.2px;
            top: -73.2px;
            position: fixed;
            background-color: black;
            opacity: 80%;
          `}
        ></div>
        <BurgerMenu />
      </div>
      <div
        css={[
          css`
            width: 100vw;
            position: fixed;
            height: 100vh;
            top: -100vh;
            background-color: #e3e1d2;
            transition: transform 1s;
          `,
          isOpen &&
            css`
              transform: translateY(100vh);
            `,
          !isOpen &&
            !isFirstPress &&
            css`
              transform: translateY(-100vh);
            `,
        ]}
      >
        <div
          css={css`
            position: absolute;

            left: 10%;
            top: 10%;
          `}
        >
          <MenuEl to="about" margin="0">
            About ->
          </MenuEl>
          <MenuEl to="menu" margin="0">
            Menu ->
          </MenuEl>
          <MenuEl to="contact" margin="0">
            Contacts ->
          </MenuEl>
          <MenuEl margin="0">
            <a href="https://github.com/rolyli/helvetica-standard">Github</a>
          </MenuEl>
        </div>
      </div>
    </div>
  )
}

export default Navbar
