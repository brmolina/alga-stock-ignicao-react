import React from 'react'
import './Header.css'

declare interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ()=>{
    return <header className="AppHeader">
        <h1>AlgaStock</h1>
    </header>
}

export default Header