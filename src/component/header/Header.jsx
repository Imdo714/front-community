import React, { useState } from "react";
import './Header.css'
import HeaderLeft from "./HeaderLeft ";
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="header">
            <div className="container">
                <div className="header-flex">
                    <HeaderLeft onToggle={() => setIsMenuOpen(!isMenuOpen)} />
                    <HeaderCenter isActive={isMenuOpen} />
                    <HeaderRight isActive={isMenuOpen} />
                </div>
            </div>
        </header>
    )
}

export default Header;