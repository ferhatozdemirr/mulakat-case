export interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface Todo {
  id: number
  text: string
  completed: boolean
}