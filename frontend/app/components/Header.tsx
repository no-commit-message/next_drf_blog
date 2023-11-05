import Link from "next/link"

export const Header = () => {
  return (
    <div className="bg-slate-800 flex justify-center py-3">
        <Link href="/" className="text-white text-4xl hover:underline">Myblog</Link>
    </div>
  )
}
