import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer__logo-container'>
            <svg className='footer__logo'>
              <use href='#footer-logo'/>
            </svg>
          </div>
          <div className='footer__links'>
            <div className='footer__list'>
              <ul>
                <li className='footer__list-heading'>About</li>
                <li className='footer__list-link'><a href='#'>How Triphouse
                  works</a></li>
                <li className='footer__list-link'><a href=''>Careers</a></li>
                <li className='footer__list-link'><a href=''>Privacy</a></li>
                <li className='footer__list-link'><a href=''>Terms</a></li>
              </ul>
            </div>
            <div className='footer__list'>
              <ul>
                <li className='footer__list-heading'>Property types</li>
                <li className='footer__list-link'><a href=''>Guest houses</a>
                </li>
                <li className='footer__list-link'><a href=''>Hotels</a></li>
                <li className='footer__list-link'><a href=''>Apartments</a></li>
                <li className='footer__list-link'><a href=''>Villas</a></li>
                <li className='footer__list-link'><a href=''>Holiday homes</a>
                </li>
                <li className='footer__list-link'><a href=''>Hostels</a></li>
              </ul>
            </div>
            <div className='footer__list'>
              <ul>
                <li className='footer__list-heading'>Support</li>
                <li className='footer__list-link'><a href=''>Contact Customer
                  Service</a></li>
                <li className='footer__list-link'><a href=''>FAQ</a></li>
              </ul>
            </div>
          </div>
          <span className='footer__copyright'>&copy; 2020 Triphouse, Inc. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;