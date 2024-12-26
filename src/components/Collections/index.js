import {useState} from 'react'

import {IoWatchOutline} from 'react-icons/io5'

import Header from '../Header'

import './index.css'

const images = [
  {
    id: 9518,
    url:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457',
  },
  {
    id: 9515,
    url:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457',
  },
  {
    id: 9517,
    url:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457',
  },
  {
    id: 9516,
    url:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457',
  },
]

const statusConstants = {
  aluminum: 'ALUMINUM',
  sport: 'SPORT',
  normal: 'NORMAL',
}

const Collections = () => {
  const [statusResponse, setStatusResponse] = useState({
    status: statusConstants.sport,
  })

  const renderCaseWatchView = () => (
    <>
      <div className="img-main-div">
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457"
          alt="watch"
          className="clc-watch-img"
        />
        <div className="clc-detail-div">
          <p className="side-view-p">Side view</p>
          <p className="series-p">APPLE WATCH SERIES 10</p>
          <p>46mm Jet Black Aluminum Case With Black Solo Loop</p>
          <p className="price-p">From $429</p>
        </div>
        <div className="cl-btn-div">
          <button type="button" className="clc-btn">
            Size
          </button>
          <button type="button" className="clc-btn">
            <IoWatchOutline style={{fontSize: '16px'}} />
            Case
          </button>
          <button type="button" className="clc-btn">
            <IoWatchOutline style={{fontSize: '16px'}} />
            Band
          </button>
        </div>
      </div>
    </>
  )

  const renderAluminumWatchView = () => (
    <>
      <div className="img-main-div">
        <ul className="clc-ul">
          {images.map(each => (
            <li className="cl-li" key={each.id}>
              <img src={each.url} alt="watch" className="clc-watch-img" />
            </li>
          ))}
        </ul>
        <div className="clc-detail-div">
          <p className="side-view-p">Side view</p>
          <p className="series-p">APPLE WATCH SERIES 10</p>
          <p>46mm Jet Black Aluminum Case With Black Solo Loop</p>
          <p className="price-p">From $429</p>
        </div>
        <div className="cl-btn-div">
          <button type="button" className="clc-btn">
            Size
          </button>
          <button type="button" className="clc-btn">
            <IoWatchOutline style={{fontSize: '16px'}} />
            Aluminum Titanium
          </button>
          <button type="button" className="clc-btn">
            <IoWatchOutline style={{fontSize: '16px'}} />
            Band
          </button>
        </div>
      </div>
    </>
  )

  const renderSportWatchView = () => (
    <>
      <div className="img-main-div">
        <ul className="clc-ul">
          {images.map(each => (
            <li className="cl-li" key={each.id}>
              <img src={each.url} alt="watch" className="clc-watch-img" />
            </li>
          ))}
        </ul>
        <div className="clc-detail-div">
          <p className="side-view-p">Side view</p>
          <p className="series-p">APPLE WATCH SERIES 10</p>
          <p>46mm Jet Black Aluminum Case With Black Solo Loop</p>
          <p className="price-p">From $429</p>
        </div>
        <div className="cl-btn-div">
          <button type="button" className="clc-btn">
            Size
          </button>
          <button type="button" className="clc-btn">
            <IoWatchOutline style={{fontSize: '16px'}} />
            Case
          </button>
          <button type="button" className="clc-btn">
            <IoWatchOutline style={{fontSize: '16px'}} />
            &emsp;Stainless Steel&emsp; Sport Loop&emsp; Sport Band&emsp;
            FineWoven&emsp; Braided Solo Loop&emsp; Solo Loop&emsp; Nike Sport
            Loop&emsp; Nike Sport Band
          </button>
        </div>
      </div>
    </>
  )

  const renderCollectionWatchView = () => {
    const {status} = statusResponse
    switch (status) {
      case statusConstants.normal:
        return renderCaseWatchView()
      case statusConstants.aluminum:
        return renderAluminumWatchView()
      case statusConstants.sport:
        return renderSportWatchView()

      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="collections-div">{renderCollectionWatchView()}</div>
    </>
  )
}

export default Collections

/*

const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  })

  const getWatchesData = () =>
    setApiResponse({
      status: apiStatusConstants.success,
    })

  useEffect(() => {
    getWatchesData()
  }, [])

  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return <p>{errorMsg}</p>
  }

  const renderLoadingView = () => (
    <div>
      <Loader type="ThreeDots" color="#202020" height="50" width="50" />{' '}
    </div>
  )

  */

// const renderSuccessView = () => {
//     const settings = {
//       dots: true,
//       arrows: false,
//       infinite: true,
//       speed: 1000,
//       slidesToShow: 1,
//       autoplay: true,
//     }
//     return (
//       <div className="offers-container">
//         <Slider {...settings}>
//           {sliderImgs.map(eachImage => (
//             <div key={eachImage.id}>
//               <img
//                 src={eachImage.imageUrl}
//                 alt="offer"
//                 className="slider-img"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     )
//   }
