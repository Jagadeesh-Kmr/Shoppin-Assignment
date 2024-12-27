import {useState} from 'react'

import {IoWatchOutline} from 'react-icons/io5'
import {FaRegSquare} from 'react-icons/fa'

import Header from '../Header'

import WatchContext from '../../context/WatchContext'

import './index.css'

const sportsWatchImages = [
  {
    id: 9518,
    url:
      'https://m.media-amazon.com/images/I/71aoTsYpj9L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 9515,
    url:
      'https://m.media-amazon.com/images/I/71aoTsYpj9L._AC_UF1000,1000_QL80_.jpg',
  },
]

const aluminumWatchImages = [
  {
    id: 9518,
    url:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvKScPemJJl-8D9zSF5DfvsZiv1qTFX78Tibzi6zmZJGW855eu',
  },
  {
    id: 9515,
    url:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvKScPemJJl-8D9zSF5DfvsZiv1qTFX78Tibzi6zmZJGW855eu',
  },
]

const statusConstants = {
  aluminum: 'ALUMINUM',
  sport: 'SPORT',
  normal: 'NORMAL',
}

const Collections = () => {
  const [statusResponse, setStatusResponse] = useState({
    status: statusConstants.normal,
  })

  const renderNormalWatchView = () => (
    <WatchContext.Consumer>
      {value => {
        const {toggleWatchViewBtn, viewBtn, toggleWatchSizeBtn, sizeBtn} = value

        const onClickViewBtn = () => {
          toggleWatchViewBtn()
        }

        const onClickChangeStatus = () => {
          setStatusResponse({status: statusConstants.aluminum})
        }

        const onClickChangeSize = () => {
          toggleWatchSizeBtn()
        }

        const viewName = viewBtn ? 'Front View' : 'Side View'

        const imageView = viewBtn
          ? 'https://www.maplestore.in/cdn/shop/files/Apple_Watch_Series_10_46mm_LTE_Jet_Black_Aluminium_Sport_Band_Black_PDP_Image_Position_1__en-IN_d55de452-6890-4aac-b5ab-31b52db9cdd6.jpg?v=1727255402&width=1445'
          : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457'

        const sizeName = sizeBtn ? 'Size' : '46mm 42mm'

        return (
          <>
            <div className="img-main-div">
              <div className="image-main-size-div ">
                {sizeBtn ? (
                  ' '
                ) : (
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/shop.unicorn/full/7e1c359e4a4d0151e80c66c0c.jpg"
                    alt="watch"
                    className="clc-watch-img"
                  />
                )}
                <img src={imageView} alt="watch" className="clc-watch-img" />
              </div>
              <div className="clc-detail-div">
                <button
                  type="button"
                  className="empty-btn side-view-p"
                  onClick={onClickViewBtn}
                >
                  {viewName}
                </button>
                <p className="series-p">APPLE WATCH SERIES 10</p>
                <p>46mm Jet Black Aluminum Case With Black Solo Loop</p>
                <p className="price-p">From $429</p>
              </div>
              <div className="cl-btn-div">
                <button
                  type="button"
                  className="clc-btn"
                  onClick={onClickChangeSize}
                >
                  <FaRegSquare style={{marginRight: '10px'}} /> {sizeName}
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
              <button
                type="button"
                className="clc-btn"
                onClick={onClickChangeStatus}
                style={{marginTop: '40px'}}
              >
                View Watch Models
              </button>
            </div>
          </>
        )
      }}
    </WatchContext.Consumer>
  )

  const renderAluminumWatchView = () => (
    <WatchContext.Consumer>
      {value => {
        const {toggleWatchViewBtn, viewBtn} = value

        const onClickViewBtn = () => {
          toggleWatchViewBtn()
        }

        const onClickChangeStatus = () => {
          setStatusResponse({status: statusConstants.sport})
        }

        const viewName = viewBtn ? 'Front View' : 'Side View'

        const imageView = viewBtn
          ? 'https://www.maplestore.in/cdn/shop/files/Apple_Watch_Series_10_46mm_LTE_Jet_Black_Aluminium_Sport_Band_Black_PDP_Image_Position_1__en-IN_d55de452-6890-4aac-b5ab-31b52db9cdd6.jpg?v=1727255402&width=1445'
          : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457'

        return (
          <>
            <div className="img-main-div">
              <ul className="clc-ul">
                {aluminumWatchImages.map(each => (
                  <li className="cl-alu-li" key={each.id}>
                    <img src={each.url} alt="watch" className="clc-alu-img" />
                  </li>
                ))}
                <img
                  src={imageView}
                  alt="watch"
                  className="clc-watch-img"
                  style={{marginRight: '40px'}}
                />
                {aluminumWatchImages.map(each => (
                  <li className="cl-alu-li" key={each.id}>
                    <img src={each.url} alt="watch" className="clc-alu-img" />
                  </li>
                ))}
              </ul>
              <div className="clc-detail-div">
                <button
                  type="button"
                  className="empty-btn side-view-p"
                  onClick={onClickViewBtn}
                >
                  {viewName}
                </button>
                <p className="series-p">APPLE WATCH SERIES 10</p>
                <p>46mm Jet Black Aluminum Case With Black Solo Loop</p>
                <p className="price-p">From $429</p>
              </div>
              <div className="cl-btn-div">
                <button type="button" className="clc-btn">
                  <FaRegSquare /> Size
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
              <button
                type="button"
                className="clc-btn"
                onClick={onClickChangeStatus}
                style={{marginTop: '40px'}}
              >
                View Watch Bands
              </button>
            </div>
          </>
        )
      }}
    </WatchContext.Consumer>
  )

  const renderSportWatchView = () => (
    <WatchContext.Consumer>
      {value => {
        const {toggleWatchViewBtn, viewBtn} = value

        const onClickViewBtn = () => {
          toggleWatchViewBtn()
        }

        const onClickChangeStatus = () => {
          setStatusResponse({status: statusConstants.aluminum})
        }

        const viewName = viewBtn ? 'Front View' : 'Side View'

        const imageView = viewBtn
          ? 'https://www.maplestore.in/cdn/shop/files/Apple_Watch_Series_10_46mm_LTE_Jet_Black_Aluminium_Sport_Band_Black_PDP_Image_Position_1__en-IN_d55de452-6890-4aac-b5ab-31b52db9cdd6.jpg?v=1727255402&width=1445'
          : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457'

        return (
          <>
            <div className="img-main-div">
              <ul className="clc-ul">
                {sportsWatchImages.map(each => (
                  <li className="cl-li" key={each.id}>
                    <img src={each.url} alt="watch" className="clc-band-img" />
                  </li>
                ))}
                <img
                  src={imageView}
                  alt="watch"
                  className="clc-watch-img"
                  style={{marginRight: '40px'}}
                />
                {sportsWatchImages.map(each => (
                  <li className="cl-li" key={each.id}>
                    <img src={each.url} alt="watch" className="clc-band-img" />
                  </li>
                ))}
              </ul>

              <div className="clc-detail-div">
                <button
                  type="button"
                  className="empty-btn side-view-p"
                  onClick={onClickViewBtn}
                >
                  {viewName}
                </button>
                <p className="series-p">APPLE WATCH SERIES 10</p>
                <p>46mm Jet Black Aluminum Case With Black Solo Loop</p>
                <p className="price-p">From $429</p>
              </div>
              <div className="cl-btn-div">
                <button type="button" className="clc-btn">
                  <FaRegSquare /> Size
                </button>
                <button type="button" className="clc-btn">
                  <IoWatchOutline style={{fontSize: '16px'}} />
                  Case
                </button>
                <button type="button" className="clc-btn">
                  <IoWatchOutline style={{fontSize: '16px'}} />
                  &emsp;Stainless Steel&emsp; Sport Loop&emsp; Sport Band&emsp;
                  FineWoven&emsp; Braided Solo Loop&emsp; Solo Loop&emsp; Nike
                  Sport Loop&emsp; Nike Sport Band
                </button>
              </div>
              <button
                type="button"
                className="clc-btn"
                onClick={onClickChangeStatus}
                style={{marginTop: '40px'}}
              >
                View Watch Models
              </button>
            </div>
          </>
        )
      }}
    </WatchContext.Consumer>
  )

  const renderCollectionWatchView = () => {
    const {status} = statusResponse
    switch (status) {
      case statusConstants.normal:
        return renderNormalWatchView()
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
