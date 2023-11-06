import Link from "next/link"

export const Header = () => {
  return (
    <div className="bg-slate-800 flex justify-between py-3 items-center">
        <Link href="/" className="text-white text-4xl hover:underline pl-12">Myblog</Link>
        <Link href="/newpost/" className="text-white text-3xl pr-12 hover:underline">新規投稿</Link>
    </div>
  )
}
