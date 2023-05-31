import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/posts.service"
import { Post } from "../../models"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"

const ListPostPage = () => {
    const [posts, setPosts] = useState<Post[] | null>(null)
    const navigate = useNavigate();


    useEffect(() => {
        setPosts(getAllPosts())
    }, [])

    return <>

        <div className="flex justify-end my-2">
            <Button onClick={() => navigate("/post/create")}>Add new post</Button>
        </div>

        {posts?.map(post =>
            <div className="group flex flex-col shadow p-2 mb-1 cursor-pointer hover:shadow-md " key={post.id} onClick={() => {
                navigate(`/post/${post.id}`)
            }}>
                <div className="flex">
                    <h3 className="font-bold">{post.title}</h3>
                </div>
                <h5>{post.subtitle}</h5>
                <p dangerouslySetInnerHTML={{ __html: post.body }} />

                <span className="self-end group-hover:text-amber-500">See more...</span>
            </div>
        )}
    </>
}

export default ListPostPage