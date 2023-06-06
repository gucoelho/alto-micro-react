import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Post } from "@models";
import { getAllPosts } from "@services/posts.service";
import { Button } from "@components/atoms";
import PostCard from "@components/molecules/PostCard";

const ListPostPage = () => {
    const [posts, setPosts] = useState<Post[] | null>(null)
    const navigate = useNavigate();

    useEffect(() => {
        setPosts(getAllPosts())
    }, [])

    const navigateToPost = (post: Post) => navigate(`/post/${post.id}`)

    return <>
        <div className="flex justify-end my-2">
            <Button onClick={() => navigate("/post/create")}>Add new post</Button>
        </div>

        {posts?.map(post => <PostCard key={post.id} post={post} onClick={() => navigateToPost(post)} />)}
    </>
}




export default ListPostPage