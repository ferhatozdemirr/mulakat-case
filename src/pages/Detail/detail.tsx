import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPhotoById } from "../../services/photoService"
import type { Photo } from "../../types/photo"

function Detail() {

  const { id } = useParams()

  const [photo, setPhoto] = useState<Photo | null>(null)

  useEffect(() => {
    const fetchPhoto = async () => {
      if (!id) return

      const data = await getPhotoById(id)
      setPhoto(data)
    }

    fetchPhoto()
  }, [id])

  if (!photo) return <p>Loading...</p>

  return (
    <div className="flex justify-center p-10">

      <div className="max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">

        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">

          <h1 className="text-xl font-bold mb-4">
            {photo.title}
          </h1>

          <p className="text-gray-600">
            Photo ID: {photo.id}
          </p>

          <p className="text-gray-600">
            Album ID: {photo.albumId}
          </p>

        </div>

      </div>

    </div>
  )
}

export default Detail