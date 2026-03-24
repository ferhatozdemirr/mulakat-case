import type { Photo } from "../types/photo";

export const getPhotos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  )
  const data = await response.json();
  const latestData = data.slice(0 , 100)
   console.log(latestData);
   
  return latestData
}

export const getPhotoById = async (id: string): Promise<Photo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  )

  const data: Photo = await response.json()

  return data
}