import React from 'react'
import {ReactComponent as HeaderIcon} from '../icons/header.svg'

function Header() {
    return (
        <header>
            <span className="header-icon"><HeaderIcon  width="32" height="32"/></span><h1>CV-Builder</h1>
        </header>
    )
}

export default Header