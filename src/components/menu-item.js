import React from 'react'
import { css, cx } from '@emotion/css'


const MenuItem = ({item1, item2, className, divide}) => {
    return (
    <div class={`${className} grid grid-cols-4 gap-4 ${divide? 'divide-x divide-white': ""}`}>
        <div class="font-montserrat text-white text-left text-lg pb-4">
            {item1}
        </div>
        <div class="font-montserrat text-white text-left text-lg pl-4 pb-4 col-span-3">
            {item2}
        </div>
    </div>
)}

const MenuEl = ({ item1 }) => {
    return (
        <p class="font-montserrat text-white text-left text-lg pb-4">
            {item1}
        </p>
    )
}

const MenuTitle = ({title, className, children}) => {
    return (
        <div className={cx(`${className} font-serif text-white text-center text-5xl mb-12 `, css`
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

const MenuSubtitle = ({subtitle, className}) => {
    return (
        <div class={`${className} text-left font-serif text-white text-3xl mb-4`}>
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