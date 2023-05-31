import { Link } from "react-router-dom"
import BlogLogo from "./BlogLogo"
import Button from "./Button"

const MainMenu = () => {
    return (
        <header className="flex items-center border-solid border-b-2 border-black w-full py-2 px-6">
            <BlogLogo />
            <ul className="list-none flex gap-2 font-bold grow">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/posts">Blog</Link>
                <Link to="/contact">Contact</Link>
            </ul>
            <SearchBar />
        </header>
    )
}

const SearchBar = () => {
    return <div className="flex flex-col justify-self-end">
        <label className="uppercase text-xs font-bold">
            Search the site
        </label>

        <div className="flex">
            <input className="placeholder:text-slate-400 placeholder:uppercase block bg-black w-full py-2 px-1 focus:outline-none focus:border-amber-500 focus:ring-amber-500 focus:ring-1 sm:text-sm text-white mr-1"
                placeholder="Enter keyword" type="text" name="search" />
            <Button>Search</Button>
        </div>
    </div>
}

export default MainMenu