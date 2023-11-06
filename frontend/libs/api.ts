import { PostInterface } from "./types"

const SERVER_URL = 'http://127.0.0.1:8000'

export const getAllPosts = async (): Promise<PostInterface[]> => {
  const response = await fetch(new URL(`${SERVER_URL}/api/`), { next: { revalidate: 5 }})
  return await response.json()
}

export const getPost = async (id: string): Promise<PostInterface> => {
  const response = await fetch(new URL(`${SERVER_URL}/api/${id}/`), { next: { revalidate: 1 }})
  return await response.json()
}

export const deletePost = async (id: string): Promise<PostInterface> => {
  const response = await fetch(new URL(`${SERVER_URL}/api/${id}/`), { method: 'DELETE' })
  return await response.json()
}

export const createPost = async (data: { id: string, title: string, content: string }): Promise<PostInterface> => {
  const response = await fetch(new URL(`${SERVER_URL}/api/`), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return await response.json()
}

export const updatePost = async (data: PostInterface): Promise<PostInterface> => {
  const response = await fetch(new URL(`${SERVER_URL}/api/${data.id}/`), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return await response.json()
}