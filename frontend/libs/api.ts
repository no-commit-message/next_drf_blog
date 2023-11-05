import { PostInterface } from "./types"

const SERVER_URL = 'http://127.0.0.1:8000'

export const getAllPosts = async (): Promise<PostInterface[]> => {
  const response = await fetch(new URL(`${SERVER_URL}/api/`))
  return await response.json()
}