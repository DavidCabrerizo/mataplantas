import React, {useRef} from "react";
import { Link } from 'react-router-dom';

function Footer() {
  const menuRef = useRef(null);
  const btnSwitchRef = useRef(null);
  const handleToggleMenu = () => {
    menuRef.current.classList.toggle('active');
};

const handleSwitchClick = () => {
    document.body.classList.toggle('dark');
    btnSwitchRef.current.classList.toggle('active');
};

  return (
    <footer className="footer">
      <span className="hojaFooter">
        <svg
          width="12"
          height="24"
          viewBox="0 0 35 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4477 10.2059C20.3601 5.60863 17.6768 1.01139 17.1622 0H17.0519C16.5373 0.96542 13.854 5.60863 10.7664 10.2059C-15.6991 52.4545 14.9567 80.9574 14.9567 80.9574L15.214 81.1873C15.4346 85.5546 16.0227 91.8988 16.0227 91.8988H18.3017C18.3017 91.8988 18.853 85.6006 19.0736 81.1873L19.3309 80.9114C19.3309 80.9114 49.9132 52.4545 23.4477 10.2059ZM17.0519 80.3138C16.4077 79.6519 15.8168 78.9128 15.2876 78.1071L17.0519 32.1347L18.706 78.1071C18.2101 78.9048 17.6564 79.6435 17.0519 80.3138Z"
            fill="#F2F2F2"
          />
        </svg>
        <Link to="/">mataplantas.com</Link>
      </span>
      <ul className="social-icon" ref={menuRef}>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-facebook"></ion-icon>
          </Link>
        </li>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-twitter"></ion-icon>
          </Link>
        </li>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-linkedin"></ion-icon>
          </Link>
        </li>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-instagram"></ion-icon>
          </Link>
        </li>
      </ul>
      <button ref={btnSwitchRef} className="switch" id="switch" onClick={handleSwitchClick}>
                    <span><i className="fa-solid fa-sun"></i></span>
                    <span><i className="fa-solid fa-moon"></i></span>
                </button>
                <input className="menu__btn" type="checkbox" id="menu__btn" />
                <label className="menu__icon" htmlFor="menu__btn" onClick={handleToggleMenu}><span className="navicon"></span></label>
    </footer>
  );
}

export default Footer;
