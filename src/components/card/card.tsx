import { Link } from "react-router-dom"
import type { Photo } from "../../types/photo"


interface CardProps {
  photo: Photo
}

function Card({ photo }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">

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
        >
          Detayı Gör
        </Link>

      </div>

    </div>
  )
}

export default Card