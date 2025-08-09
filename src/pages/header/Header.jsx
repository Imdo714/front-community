import React, { useState } from "react";
import './Header.css'
import HeaderLeft from "../../component/header/HeaderLeft ";
import HeaderCenter from '../../component/header/HeaderCenter';
import HeaderRight from '../../component/header/HeaderRight';

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