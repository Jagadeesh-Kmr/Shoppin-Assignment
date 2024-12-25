import {Link, withRouter} from 'react-router-dom'
import {FaApple, FaRegBookmark} from 'react-icons/fa'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-bar-mobile-logo-container">
        <Link to="/" className="link">
          <p className="apple-main-p">
            <FaApple />
            WATCH
          </p>
        </Link>

        <li className="nav-menu-item-mobile-home">
          <Link to="/home" className="link">
            <FaRegBookmark className="save-logo" />
          </Link>
        </li>
      </div>

      <div className="nav-bar-large-container">
        <Link to="/" className="link">
          <p className="apple-main-p">
            <FaApple />
            WATCH
          </p>
        </Link>
        <button type="button" className="save-btn">
          Save
        </button>
      </div>
    </nav>
  </>
)

export default withRouter(Header)
