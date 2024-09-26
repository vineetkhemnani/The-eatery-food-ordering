import { useContext } from 'react'
import { IMAGE_CDN_URL } from '../constants'
import UserContext from '../utils/userContext'

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  const { user } = useContext(UserContext)
  return (
    <div className="h-96 w-56 p-2 m-2 shadow-md bg-purple-50 rounded-lg flex flex-col justify-between">
      {/* Fix image height, add background fallback, and use object-contain */}
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-t-lg">
        <img
          className="max-w-full max-h-full object-contain"
          src={IMAGE_CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
      </div>
      <h4
        className={`self-start ${
          avgRating < 4
            ? avgRating < 3
              ? 'bg-red-500'
              : 'bg-orange-500'
            : 'bg-green-500'
        } 
        text-white rounded inline-block p-1`}
      >
        {avgRating} stars
      </h4>
    </div>
  )
}

export default RestaurantCard
