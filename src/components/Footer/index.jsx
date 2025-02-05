import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../Wrapper';

import { Container } from './style';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div className="content">
          <div className="about">
            <h5>Title here</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              rerum quibusdam inventore laborum, perspiciatis eligendi atque
              tempora at enim deserunt.
            </p>
            <ul className="social-media">
              <li>
                <Link to="/">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-whatsapp" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="navigation">
            <nav>
              <h5>About</h5>
              <ul>
                <li>
                  <Link to="/">History</Link>
                </li>
                <li>
                  <Link to="/">Our Team</Link>
                </li>
                <li>
                  <Link to="/">Brand Guidelines</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <h5>Services</h5>

              <ul>
                <li>
                  <Link to="/">How to Order</Link>
                </li>
                <li>
                  <Link to="/">Our Product</Link>
                </li>
                <li>
                  <Link to="/">Order Status</Link>
                </li>
                <li>
                  <Link to="/">Promo</Link>
                </li>
                <li>
                  <Link to="/">Payment Method</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <h5>Other</h5>
              <ul>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Help</Link>
                </li>
                <li>
                  <Link to="/">Privacy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
