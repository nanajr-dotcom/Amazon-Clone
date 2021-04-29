import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header() {
    return (
        <div className='header'>
          <img 
            className="header__logo" 
            src="https://i.ibb.co/bXLnf9r/amazon-PNG25.png"
            alt="amazon-logo"
            />
            <div className="header_search">
                <input 
                className="header_searchInput"
                type="text" />
                <SearchIcon
                className="header__searchIcon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header_option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header_optionCart">
                    <ShoppingCartIcon/>
                    <span className="header__optionLineTwo header__cartCount">
                        0
                    </span>
                </div>
            </div>  
        </div>
    );
};

export default Header
