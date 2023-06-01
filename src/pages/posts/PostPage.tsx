import { useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../../services/posts.service";
import { useEffect, useState } from "react";
import { Post } from "../../models";
import Button from "../../components/Button";

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | undefined>()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            const postInStorage = getPostById(id)
            setPost(postInStorage)
        }
    }, [id])

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