import axios from "axios"
import type { Photo } from "../types/photo"

const API_URL = "https://jsonplaceholder.typicode.com"

export const getPhotos = async (): Promise<Photo[]> => {
  const response = await axios.get(`${API_URL}/photos?_limit=100`)
  console.log(response.data);
  
  return response.data
}

export const getPhotoById = async (id: string): Promise<Photo> => {
  const response = await axios.get(`${API_URL}/photos/${id}`)
  return response.data
}

export const sendPhotoId = async (id: number) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    { photoIdd: id }
  )

  return response.data
}