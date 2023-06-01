import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { editPost, getPostById } from "../../services/posts.service";
import { Post } from "../../models";


const EditPostPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState<Post | undefined>()

    useEffect(() => {
        if (id) {
            const postInStorage = getPostById(id)
            setPost(postInStorage)
        }
    }, [id])

    const submit = () => {
        if (post) editPost(post)

        navigate(`/post/${id}`)
    }

    if (!post) return <div>Loading...</div>


    return <form onSubmit={submit}>
        <div className="flex flex-col">
            <label>Title</label>
            <input name="title" value={post.title} onChange={v => setPost({ ...post, title: v.target.value })} />
        </div>

        <div className="flex flex-col">
            <label>Subtitle</label>
            <input name="subtitle" value={post.subtitle} onChange={v => setPost({ ...post, subtitle: v.target.value })} />
        </div>

        <div className="flex flex-col">
            <label>Body</label>
            <textarea name="body" value={post.body} onChange={v => setPost({ ...post, body: v.target.value })} />
        </div>
        <Button>Create</Button>
    </form>
}

export default EditPostPage