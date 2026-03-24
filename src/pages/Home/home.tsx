import { useEffect, useState } from "react"
import { getPhotos } from "../../services/photoService"
import Card from "../../components/card/card"
import type { Photo } from "../../types/photo"

function Home() {

  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhotos()
      setPhotos(data)
    }

    fetchData()
  }, [])

  return (
    <div className="p-10 grid grid-cols-4 gap-6">

      {photos.slice(0, 50).map((photo) => (
        <Card key={photo.id} photo={photo} />
      ))}

    </div>
  )
}

export default Home