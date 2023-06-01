import { useNavigate } from "react-router-dom"
import Button from "./Button"
import { getAllPosts } from "../services/posts.service"
import { useState } from "react"


const SearchBar = () => {
    const [posts] = useState(getAllPosts())
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    return <div className="flex flex-col justify-self-end relative">
        <label className="uppercase text-xs font-bold">
            Search the site
        </label>

        <div className="flex">
            <input
                className="placeholder:text-slate-400 placeholder:uppercase block bg-black w-full py-2 px-1 focus:outline-none focus:border-amber-500 focus:ring-amber-500 focus:ring-1 sm:text-sm text-white mr-1"
                value={value}
                onChange={v => setValue(v.target.value)}
                placeholder="Enter keyword" type="text" name="search" />
            <Button>Search</Button>
        </div>

        {value.length > 0 &&
            <div className="flex flex-col absolute top-12 left-0 bg-white w-full py-2 px-1 z-10">
                {posts.filter(p => p.title.includes(value)).map(post =>
                    <div
                        key={post.id}
                        className="hover:font-bold cursor-pointer normal-case"
                        onClick={() => {
                            setValue("")
                            navigate(`/post/${post.id}`)
                        }}>
                        {post.title}
                    </div>)
                }
            </div>}
    </div>
}

export default SearchBar