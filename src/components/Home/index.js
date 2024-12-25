import {Link} from 'react-router-dom'
import {FaApple} from 'react-icons/fa'

import './index.css'

const Home = () => (
  <>
    <p className="apple-main-p">
      <FaApple />
      Watch
    </p>
    <div className="home-bg-div">
      <div>
        <p className="home-studio-p">Apple Watch Studio</p>
        <h1 className="home-h1">Choose a case.</h1>
        <h1 className="home-h1">Pick a band.</h1>
        <h1 className="home-h1">Create your own style.</h1>
        <Link to="/collections" className="link">
          <button type="button" className="home-btn">
            Get Started
          </button>
        </Link>
      </div>

      <img
        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457"
        alt="watch"
        className="watch-img"
      />
    </div>
  </>
)

export default Home
