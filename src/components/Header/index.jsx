import React, { useEffect, useState } from 'react';

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
        <a href="#">
          <i className="fas fa-hamburger" />
        </a>

        <nav>
          <button type="button" onClick={() => setIsOpen(false)}>
            <i className="fas fa-times" />
          </button>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">Promo</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
