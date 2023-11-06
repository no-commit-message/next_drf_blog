import { getAllPosts } from "@/libs/api"
import { Post } from "./Post"

const SERVER_URL = 'http://127.0.0.1:8000'

export const Main = async () => {
    const posts = await getAllPosts()
    console.log(posts)
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl mt-8">投稿一覧</h1>
            <ul>
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </ul>
        </div>
    )
}
