import { deletePost, getPost } from "@/libs/api"
import { Header } from "../components/Header"
import Link from "next/link"
import { Footer } from "../components/Footer"

export default async function Detail({ params }: { params: { id: string } }) {
    const post = await getPost(params.id)

    const handleClick = async () => {
        await deletePost(params.id)
        alert('削除しました')
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center mt-10">
                <div className="rounded-lg border shadow-lg py-4 px-10 w-6/12">
                    <h1 className="text-4xl border-b pb-2">{ post.title }</h1>
                    <p className="pt-4 text-xl">{ post.content }</p>
                    <p className="pt-4">投稿日: { post.created_at }</p>
                    <Link href="/" className="hover:text-blue-700 hover:underline">投稿一覧に戻る</Link>
                </div>
            </div>
            <div className="flex justify-center mt-8 text-2xl">
                <button
                    className="bg-red-600 text-white rounded-md shadow-md px-3 py-2"
                    onClick={ handleClick }>投稿の削除</button>
            </div>
            <Footer />
        </div>
    )
}