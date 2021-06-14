import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faRocket, faAddressCard, faCode, faMoon } from '@fortawesome/free-solid-svg-icons'
import './SideDrawer.css'

const SideDrawer = () => (
  <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="d" className="nav-link">
              <span className="link-text">Raul Jimenez</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-3x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faCat} size="2x" className="nav-icon" />
              <span className="link-text">CatsAni</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faRocket} size="2x" className="nav-icon" />
              <span className="link-text">Rocket</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faAddressCard} size="2x" className="nav-icon" />
              <span className="link-text">Addres</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faCode} size="2x" className="nav-icon" />
              <span className="link-text">Code</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="cats" className="nav-link">
              <FontAwesomeIcon icon={faMoon} size="2x" className="nav-icon" />
              <span className="link-text">Theme</span>
            </a>
          </li>
        </ul>
      </nav>
)

export default SideDrawer
