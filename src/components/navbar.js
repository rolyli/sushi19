import React from "react"

const NavbarEl = ({ children }) => {
    return(
        <div class="opacity-95 mx-5 inline-block transition duration-500 ease-in-out transform hover:scale-110">{children}</div>
    )
}

const Navbar = () => {
    return(
        <div class="fixed text-center p-4 w-screen max-w-full  z-20 w-100 text-white font-montserrat uppercase w-100  xl:tracking-widest">
        <NavbarEl>Blog</NavbarEl>
        <NavbarEl>About</NavbarEl>
        <NavbarEl>Menu</NavbarEl>

        </div>
    )

}

export default Navbar