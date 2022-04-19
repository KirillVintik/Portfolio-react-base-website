import React, { useState } from "react";
import "./Header.css"

const navLinks = [
  {
    url: "#home",
    display: "Home",
  },
  {
    url: "#features",
    display: "Features",
  },
  {
    url: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      header.classList.toggle('active',window.scrollY > 100)
    })

    const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <a href="#contact">Kiryl Vintsik</a>
          </div>

          <div className="navLink">            
            <ul className={Mobile ? 'nav-links-mobile' : 'link f_flex upperacse'} onClick={() => setMobile(false)}>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
                {Mobile ? <i className="fa fa-times close home-btn"></i> : <i className="fa fa-bars open"></i>}               
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
