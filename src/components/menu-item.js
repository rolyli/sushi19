import React from 'react'
import { css, cx } from '@emotion/css'


const MenuItem = ({item1, item2, price, className, vegan}) => {
    return (
    <div style={{color: "#333"}} class={`${className}`}>
        <div class="font-montserrat text-left text-lg mb-2 uppercase">
            <span class="float-left">{item1} {vegan && '(v)'}</span>
            <span class='float-right'>£{price}</span>
        </div>
        <div class="font-montserrat text-left text-lg mb-6">
            <br/>
            {item2}
        </div>
    </div>
)}

const MenuEl = ({ className, item1, price }) => {
    return (
        <div style={{color: "#ac9377"}} class="font-montserrat text-white text-left text-lg mb-2 xl:mr-20 uppercase">
            <span class="float-left">{item1}</span>
            <span class='float-right'>£{price}</span>
            <br/>

        </div>

        
    )
}

const MenuTitle = ({title, className, children}) => {
    return (
        <div className={cx(`${className} font-serif text-center text-5xl mb-12 `, css`
            color: #ac9377;
            :before,
            :after {
                display: inline-block;
                content: "";
                border-top: .1rem solid white;
                width: 100%;
                transform: translateY(-1rem);
            }
        `)}
        >
            {title}{children}
        </div>
    )
}

const MenuSubtitle = ({subtitle, className, color}) => {
    return (
        <div style={{color: color || "#ac9377"}} class={`${className} font-serif text-3xl mb-4`}>
            {subtitle}
        </div>
    )
}



export {
    MenuItem,
    MenuTitle,
    MenuSubtitle,
    MenuEl
}