import React from 'react'

const MenuItem = ({item1, item2, className, divide}) => {
    return (
    <div class={`${className} grid grid-cols-2`}>
        <div class="font-montserrat text-white text-left text-xl pb-4">
            {item1}
        </div>
        <div class="font-montserrat text-white text-left text-xl pl-4 pb-4 ">
            {item2}
        </div>
    </div>
)}

const MenuTitle = ({title, className}) => {
    return (
        <div class={`${className} font-serif text-white text-center text-5xl mb-4`}>
            {title}
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
    MenuSubtitle
}