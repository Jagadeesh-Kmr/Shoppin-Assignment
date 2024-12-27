import {useState} from 'react'
import {Link} from 'react-router-dom'

import {IoWatchOutline} from 'react-icons/io5'
import {FaRegSquare, FaApple} from 'react-icons/fa'

import Header from '../Header'

import WatchContext from '../../context/WatchContext'

import './index.css'

const sportsWatchImages = [
  {
    id: 9515,
    url:
      'https://m.media-amazon.com/images/I/71aoTsYpj9L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 9518,
    url:
      'https://microless.com/cdn/products/0c24fce4f96ee8ca00a699bda5d95e80-hi.jpg',
  },
]

const aluminumWatchImages = [
  {
    id: 9515,
    url:
      'https://ie.static.webuy.com/product_images/Electronics/Apple%20Watch/SAWAWAT1GOL38A_l.jpg',
  },
  {
    id: 9518,
    url:
      'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/watchos5-series4-status-water-lock.jpg',
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
        const {
          toggleWatchViewBtn,
          toggleWatchSizeBtn,
          toggleWatchSaveBtn,
          viewBtn,
          sizeBtn,
          saveBtn,
        } = value

        const onClickViewBtn = () => {
          toggleWatchViewBtn()
        }

        const onClickChangeStatus = () => {
          setStatusResponse({status: statusConstants.aluminum})
        }

        const onClickChangeBandStatus = () => {
          setStatusResponse({status: statusConstants.sport})
        }

        const onClickChangeSize = () => {
          toggleWatchSizeBtn()
        }

        const onClickSaveBtn = () => {
          toggleWatchSaveBtn()
        }

        const viewName = viewBtn ? 'Front View' : 'Side View'

        const imageView = viewBtn
          ? 'https://www.maplestore.in/cdn/shop/files/Apple_Watch_Series_10_46mm_LTE_Jet_Black_Aluminium_Sport_Band_Black_PDP_Image_Position_1__en-IN_d55de452-6890-4aac-b5ab-31b52db9cdd6.jpg?v=1727255402&width=1445'
          : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457'

        const sizeName = sizeBtn ? 'Size' : '46mm 42mm'
        const price = sizeBtn
          ? 'From $429'
          : 'Size 46mm From $440 / Size 42mm From $429'

        const watchSaveMainDiv = saveBtn
          ? 'watch-bg-display-div'
          : 'watch-display-div'

        return (
          <>
            <div className="img-main-div">
              <div className={watchSaveMainDiv}>
                <FaApple className="apple-logo" />
                <p>Watch Details Saved</p>
                <Link to="/" className="link">
                  <button
                    type="button"
                    className="back-home-btn"
                    onClick={onClickSaveBtn}
                  >
                    Back to home
                  </button>
                </Link>
              </div>
              <div className="image-main-size-div ">
                {sizeBtn ? (
                  ' '
                ) : (
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/shop.unicorn/full/7e1c359e4a4d0151e80c66c0c.jpg"
                    alt="watch"
                    className="watch-big-img"
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
                <p className="watch-detail-p">
                  46mm Jet Black Aluminum Case With Black Solo Loop
                </p>
                <p className="price-p">{price}</p>
              </div>
              <div className="cl-btn-div">
                <button
                  type="button"
                  className="clc-btn"
                  onClick={onClickChangeSize}
                >
                  <FaRegSquare style={{marginRight: '10px'}} /> {sizeName}
                </button>
                <button
                  type="button"
                  className="clc-btn"
                  onClick={onClickChangeStatus}
                >
                  <IoWatchOutline style={{fontSize: '16px'}} />
                  Case
                </button>
                <button
                  type="button"
                  className="clc-btn"
                  onClick={onClickChangeBandStatus}
                >
                  <IoWatchOutline style={{fontSize: '16px'}} />
                  Band
                </button>
              </div>
            </div>
          </>
        )
      }}
    </WatchContext.Consumer>
  )

  const renderAluminumWatchView = () => (
    <WatchContext.Consumer>
      {value => {
        const {
          toggleWatchViewBtn,
          toggleWatchSizeBtn,
          toggleWatchSaveBtn,
          viewBtn,
          saveBtn,
          sizeBtn,
        } = value

        const onClickViewBtn = () => {
          toggleWatchViewBtn()
        }

        const onClickChangeStatus = () => {
          setStatusResponse({status: statusConstants.sport})
        }

        const onClickChangeSize = () => {
          toggleWatchSizeBtn()
        }

        const onClickSaveBtn = () => {
          toggleWatchSaveBtn()
        }

        const viewName = viewBtn ? 'Front View' : 'Side View'

        const imageView = viewBtn
          ? 'https://www.maplestore.in/cdn/shop/files/Apple_Watch_Series_10_46mm_LTE_Jet_Black_Aluminium_Sport_Band_Black_PDP_Image_Position_1__en-IN_d55de452-6890-4aac-b5ab-31b52db9cdd6.jpg?v=1727255402&width=1445'
          : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457'

        const watchSaveMainDiv = saveBtn
          ? 'watch-bg-display-div watch-mb-dis-div'
          : 'watch-display-div'

        const sizeName = sizeBtn ? 'Size' : '46mm 42mm'
        const price = sizeBtn
          ? 'From $429'
          : 'Size 46mm From $440 / Size 42mm From $429'

        return (
          <>
            <div className="img-main-div mb-case-view">
              <div className={watchSaveMainDiv}>
                <FaApple style={{fontSize: '200px'}} />
                <p>Watch Details Saved</p>
                <Link to="/" className="link">
                  <button
                    type="button"
                    className="back-home-btn"
                    onClick={onClickSaveBtn}
                  >
                    Back to home
                  </button>
                </Link>
              </div>
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
                <p className="watch-detail-p">
                  46mm Jet Black Aluminum Case With Black Solo Loop
                </p>
                <p className="price-p">{price}</p>
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
                  Aluminum Titanium
                </button>
                <button
                  type="button"
                  className="clc-btn"
                  onClick={onClickChangeStatus}
                >
                  <IoWatchOutline style={{fontSize: '16px'}} />
                  Band
                </button>
              </div>
            </div>
          </>
        )
      }}
    </WatchContext.Consumer>
  )

  const renderSportWatchView = () => (
    <WatchContext.Consumer>
      {value => {
        const {
          toggleWatchViewBtn,
          toggleWatchSizeBtn,
          toggleWatchSaveBtn,
          viewBtn,
          saveBtn,
          sizeBtn,
        } = value

        const onClickViewBtn = () => {
          toggleWatchViewBtn()
        }

        const onClickChangeSize = () => {
          toggleWatchSizeBtn()
        }

        const onClickSaveBtn = () => {
          toggleWatchSaveBtn()
        }

        const onClickChangeStatus = () => {
          setStatusResponse({status: statusConstants.aluminum})
        }

        const viewName = viewBtn ? 'Front View' : 'Side View'

        const imageView = viewBtn
          ? 'https://www.maplestore.in/cdn/shop/files/Apple_Watch_Series_10_46mm_LTE_Jet_Black_Aluminium_Sport_Band_Black_PDP_Image_Position_1__en-IN_d55de452-6890-4aac-b5ab-31b52db9cdd6.jpg?v=1727255402&width=1445'
          : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457'

        const sizeName = sizeBtn ? 'Size' : '46mm 42mm'
        const price = sizeBtn
          ? 'From $429'
          : 'Size 46mm From $440 / Size 42mm From $429'

        const watchSaveMainDiv = saveBtn
          ? 'watch-bg-display-div watch-mb-dis-div'
          : 'watch-display-div'

        return (
          <>
            <div className="img-main-div">
              <div className={watchSaveMainDiv}>
                <FaApple style={{fontSize: '200px'}} />
                <p>Watch Details Saved</p>
                <Link to="/" className="link">
                  <button
                    type="button"
                    className="back-home-btn"
                    onClick={onClickSaveBtn}
                  >
                    Back to home
                  </button>
                </Link>
              </div>
              <div className="clc-band-div">
                <ul className="clc-band-ul">
                  {sportsWatchImages.map(each => (
                    <li className="cl-band-li" key={each.id}>
                      <img
                        src={each.url}
                        alt="watch"
                        className="clc-band-img"
                      />
                    </li>
                  ))}
                </ul>

                <img src={imageView} alt="watch" className="clc-watch-img" />
                <ul className="clc-band-ul">
                  {sportsWatchImages.map(each => (
                    <li className="cl-band-li" key={each.id}>
                      <img
                        src={each.url}
                        alt="watch"
                        className="clc-band-img"
                      />
                    </li>
                  ))}
                </ul>
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
                <p className="watch-detail-p">
                  46mm Jet Black Aluminum Case With Black Solo Loop
                </p>
                <p className="price-p">{price}</p>
              </div>
              <div className="cl-btn-div">
                <button
                  type="button"
                  className="clc-btn"
                  onClick={onClickChangeSize}
                >
                  <FaRegSquare style={{marginRight: '10px'}} /> {sizeName}
                </button>
                <button
                  type="button"
                  className="clc-btn"
                  onClick={onClickChangeStatus}
                >
                  <IoWatchOutline style={{fontSize: '16px'}} />
                  Case
                </button>
                <button type="button" className="clc-btn band-btn">
                  <IoWatchOutline style={{fontSize: '16px'}} />
                  &emsp;Stainless Steel&emsp; Sport Loop&emsp; Sport Band&emsp;
                  FineWoven&emsp; Braided Solo Loop&emsp; Solo Loop&emsp; Nike
                  Sport Loop&emsp; Nike Sport Band
                </button>
              </div>
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
