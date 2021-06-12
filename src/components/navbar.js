import React from "react"
import { useState } from "react"
import styled from "@emotion/styled"
import { jsx, css, keyframes } from "@emotion/react"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { TweenMax } from "gsap";

gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [isFirstPress, setFirstPress] = useState(true)

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
        z-index: 50;
        margin: 1rem;
        cursor: pointer;
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
          margin-left: ${props.margin}vw;
          font-family: lora;
          font-size: 7rem;
          color: white;
          cursor: pointer;
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
      <BurgerMenu />
      <div
        css={[
          css`
            width: 100vw;
            position: fixed;
            height: 100vh;
            top: -100vh;
            background-color: #0f0f0f;
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

            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          `}
        >
          <MenuEl to="about" margin="25">About</MenuEl>
          <MenuEl to="menu" margin="30">Menu</MenuEl>
          <MenuEl to="contact" margin="35">Contacts</MenuEl>
          <MenuEl margin="25"><a href="https://github.com/rolyli/helvetica-standard">Github</a></MenuEl>
        </div>
      </div>
    </div>
  )
}

export default Navbar
