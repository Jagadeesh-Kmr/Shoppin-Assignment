import {Link, withRouter} from 'react-router-dom'
import {FaApple, FaRegBookmark, FaBookmark} from 'react-icons/fa'

import WatchContext from '../../context/WatchContext'

import './index.css'

const Header = () => (
  <WatchContext.Consumer>
    {value => {
      const {toggleWatchSaveBtn, saveBtn} = value

      const onClickSaveBtn = () => {
        toggleWatchSaveBtn()
      }

      const saveName = saveBtn ? 'Saved' : 'Save'

      const saveLogo = saveBtn ? <FaBookmark /> : <FaRegBookmark />

      return (
        <>
          <nav className="nav-header">
            <div className="nav-bar-mobile-logo-container">
              <Link to="/" className="link">
                <p className="apple-main-p">
                  <FaApple />
                  WATCH
                </p>
              </Link>

              <button
                type="button"
                className="save-logo empty-btn"
                onClick={onClickSaveBtn}
              >
                {saveLogo}
              </button>
            </div>

            <div className="nav-bar-large-container">
              <Link to="/" className="link">
                <p className="apple-main-p">
                  <FaApple />
                  WATCH
                </p>
              </Link>

              <select className="selection-input">
                <option className="sl-option">Collection</option>
                <option className="sl-option">Apple Watch Series 10</option>
                <option className="sl-option">
                  Apple Watch Hermes Series 10
                </option>
                <option className="sl-option">Apple Watch SE</option>
              </select>
              <button
                type="button"
                className="save-btn"
                onClick={onClickSaveBtn}
              >
                {saveName}
              </button>
            </div>
          </nav>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default withRouter(Header)
