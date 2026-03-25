import { Link } from "react-router-dom"
import type { Photo } from "../../types/photo"
import { useEffect, useState } from "react"
import { sendPhotoId } from "../../services/photoService"
import styles from '../card.module.css'

interface CardProps {
  photo: Photo
}

const Card = ({ photo }: CardProps) => {

const [buttonCardId, setButtonCardId] = useState<boolean>(false)

 useEffect(() => {
  
  buttonCardId && sendPhotoId(photo.id)
 }, [buttonCardId])
 
  return (
       <div className={`${styles.card} bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition`}>

      <img
        src={photo?.url}
        alt={photo?.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">

        <h3 className="text-sm font-semibold mb-2 line-clamp-2">
          {photo?.title}
        </h3>

      <Link
          to={`/photo/${photo.id}`}
          className="text-blue-600 hover:underline"
          onClick={() => setButtonCardId(true)}
        >
          Detayı Gör
        </Link>

      </div>

    </div>
  )
}

export default Card