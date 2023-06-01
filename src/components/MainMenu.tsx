import { Link } from "react-router-dom"
import BlogLogo from "./BlogLogo"
import SearchBar from "./SearchBar"

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

export default MainMenu