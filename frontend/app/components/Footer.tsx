import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex flex-col items-center border-t-2 pt-2 mt-8">
        <p>Created by: K.Ayumu</p>
        <p>GitHub: <Link href="https://github.com/no-commit-message" className="hover:text-slate-800 hover:underline">no-commit-message</Link></p>
    </div>
  )
}