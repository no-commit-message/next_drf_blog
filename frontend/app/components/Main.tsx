import { getAllPosts } from "@/libs/api"
import { Post } from "./Post"


export const Main = async () => {
    const posts = await getAllPosts()
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