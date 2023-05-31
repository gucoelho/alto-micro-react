import { useParams } from "react-router-dom";
import { getPostById } from "../../services/posts.service";
import { useEffect, useState } from "react";
import { Post } from "../../models";

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | undefined>()

    useEffect(() => {
        if (id) {
            const postInStorage = getPostById(id)
            setPost(postInStorage)
        }
    }, [id])

    if (!post) return <div>Post not found</div>

    return <section>
        <div className="flex">
            <h3 className="font-bold">{post.title}</h3>
        </div>
        <h5>{post.subtitle}</h5>
        <p dangerouslySetInnerHTML={{ __html: post.body }} />
    </section>
}

export default PostPage