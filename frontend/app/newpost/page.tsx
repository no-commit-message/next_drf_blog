"use client";

import { createPost } from "@/libs/api";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export default function Post() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleClick = async () => {
        const post = {id: uuidv4(), title: title, content: content}
        await createPost(post)
        alert('投稿しました')
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center mt-8">
                <div className="rounded-lg border shadow-lg px-8 py-4 text-xl">
                    <h1 className="text-2xl border-b mb-2 border-slate-700">新規投稿</h1>
                    <form>
                        <div>
                            <p>タイトル</p>
                            <input 
                                className='border border-slate-700 rounded-md shadow-md mb-2 w-full focus:outline-none focus:ring-1 focus:ring-indigo-700'
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <p>本文</p>
                            <textarea
                                cols={40}
                                rows={10}
                                className="border border-slate-700 rounded-md shadow-md mb-2 w-full focus:outline-none focus:ring-1 focus:ring-indigo-700"
                                value={content}
                                onChange={(e) => setContent(e.target.value)} ></textarea>
                        </div>
                        <button 
                            className="bg-slate-700 text-white px-3 py-2 rounded-md shadow-md"
                            onClick={ handleClick }>投稿</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}