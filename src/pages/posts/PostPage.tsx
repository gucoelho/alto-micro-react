import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Post } from "@models";
import { getPostById } from "@services/posts.service";
import { Button } from "@components/atoms";

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | undefined>()
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        if (id) {
            const postInStorage = getPostById(id)
            setPost(postInStorage)
        }
        setLoading(false)
    }, [id])


    if (loading) return <div>Loading...</div>

    if (!post) return <div>Post not found</div>

    return <section>
        <div className="flex justify-end my-2">
            <Button onClick={() => navigate(`/post/${id}/edit`)}>Edit post</Button>
        </div>
        <div className="flex">
            <h3 className="font-bold">{post.title}</h3>
        </div>
        <h5>{post.subtitle}</h5>
        <p dangerouslySetInnerHTML={{ __html: post.body }} />
    </section>
}

export default PostPage