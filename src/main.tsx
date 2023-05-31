import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { LOCAL_STORAGE_KEY } from './services/posts.service.ts'
import initialPosts from "./services/posts.json"

const loadInitalPosts = () => {

  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialPosts))
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
