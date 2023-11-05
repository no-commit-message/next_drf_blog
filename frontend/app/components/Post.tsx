import { PostInterface } from "@/libs/types"
import Link from "next/link"

interface PostProps {
    post: PostInterface
}

export const Post = ({ post }: PostProps) => {
    return (
        <li className="border py-4 px-8 rounded-lg shadow-lg my-4">
            <Link href={`/${post.id}/`} className="text-2xl hover:underline">{post.title}</Link>
            <p className="border-t pt-2">{post.content}</p>
            <p>{post.created_at}</p>
        </li>
    )
}