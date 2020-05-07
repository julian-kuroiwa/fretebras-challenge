import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, WrapperStyled } from './style';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollHandle = () => {
    if (document.documentElement.scrollTop > 100) {
      setIsScrolled(true);

      return;
    }

    setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle);
    return () => {
      window.removeEventListener('scroll', scrollHandle);
    };
  });
  return (
    <Container isScrolled={isScrolled} isOpen={isOpen}>
      <WrapperStyled>
        <Link to="/">
          <i className="fas fa-hamburger" />
        </Link>

        <nav>
          <button type="button" onClick={() => setIsOpen(false)}>
            <i className="fas fa-times" />
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/">Promo</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>

        <button type="button" onClick={() => setIsOpen(true)}>
          <i className="fas fa-bars" />
        </button>
      </WrapperStyled>
    </Container>
  );
};

export default Header;
