import { Link, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/HomePage'
import MainMenu from './components/MainMenu'
import { AboutPage, ContactPage, CreatePostPage, PostListPage } from './pages'
import { LOCAL_STORAGE_KEY } from './services/posts.service'
import initialPosts from "./services/posts.json"
import { useEffect } from 'react'
import PostPage from './pages/posts/PostPage'
import EditPostPage from './pages/posts/EditPostPage'

const loadInitalPosts = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialPosts))
}


function App() {
  useEffect(() => {
    loadInitalPosts()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="posts" element={<PostListPage />} />
        <Route path="/post/create" element={<CreatePostPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post/:id/edit" element={<EditPostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

const Layout = () => {
  return (
    <div className="md:px-0 xl:px-48">
      <MainMenu />
      <Outlet />
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App
