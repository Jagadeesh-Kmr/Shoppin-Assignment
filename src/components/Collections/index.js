import {useState} from 'react'

import Slider from 'react-slick'
import Loader from 'react-loader-spinner'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const sliderImages = [
  {
    id: 0,
    imageUrl:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457',
  },
  {
    id: 15951,
    imageUrl:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457',
  },
  {
    id: 65165,
    imageUrl:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457',
  },
  {
    id: 74239,
    imageUrl:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL33ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724186586457',
  },
]

const Collections = () => {
  const [sliderImgs] = useState([sliderImages])

  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  })

  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return <p>{errorMsg}</p>
  }

  const renderLoadingView = () => (
    <div>
      <Loader type="ThreeDots" color="#202020" height="50" width="50" />{' '}
    </div>
  )

  const renderSuccessView = () => {
    console.log(sliderImgs)
  }

  const renderSliderImgsView = () => {
    const {status} = apiResponse

    switch (status) {
      case apiResponse.inProgress:
        return renderLoadingView()
      case apiResponse.success:
        return renderSuccessView()
      case apiResponse.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="restaurants-container col-12 col-md-4">
        {renderSliderImgsView()}
      </div>
    </>
  )
}

export default Collections

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
