import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Styles/WebSite/WebSite.css';
import '../../Assets/Styles/WebSite/Navbar.css';
import BurguerButton from './BurguerButton';
import ShoppingCart from './ShoppingCart';
import { useNavigate } from 'react-router-dom';

function NavBar({ onNavLinkClick }) {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleNavLinkClick = () => {
    setClicked(false); // Cierra el menú cuando se hace clic en un enlace
  };
  const home = () => {
    navigate('/');
  };

  return (
    <>
      <div className='container-navbar'>
        <a className='logo'>
          <img onClick={home} src='/logo.png' alt='logo'></img>
        </a>
        <nav className={`nav ${clicked ? 'active' : ''}`}>
          <Link to='/' className='nav-link'>
            HOME
          </Link>
          <a
            onClick={() => {
              onNavLinkClick('tematicas');
              handleNavLinkClick();
            }}
          >
            TEMATICAS
          </a>
          <a
            onClick={() => {
              onNavLinkClick('contacto');
              handleNavLinkClick();
            }}
          >
            CONTACTO
          </a>
          <a
            onClick={() => {
              onNavLinkClick('quienesSomos');
              handleNavLinkClick();
            }}
          >
            QUIENES SOMOS
          </a>
        </nav>
        <div>
          <ShoppingCart />
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`initial ${clicked ? 'active' : ''}`}></div>
      </div>
    </>
  );
}

export default NavBar;
