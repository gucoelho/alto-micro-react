import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import { AboutPage, ContactPage, CreatePostPage, EditPostPage, PostListPage, PostPage } from '@pages'
import { LOCAL_STORAGE_KEY } from './services/posts.service'
import initialPosts from "./services/posts.json"
import { useEffect } from 'react'
import Layout from './templates/Layout'
import NotFound from '@pages/NotFound'


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



export default App
