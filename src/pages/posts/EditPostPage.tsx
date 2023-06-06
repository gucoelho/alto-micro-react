import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "@models";
import { editPost, getPostById } from "@services/posts.service";
import CreateOrEditForm from "@components/molecules/CreateOrEditForm";

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

    const handleChange = <P extends keyof Post>(prop: P, value: Post[P]) => {
        if (post) setPost({ ...post, [prop]: value })
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (post) editPost(post)
        navigate(`/post/${id}`)
    }

    if (!post) return <div>Loading...</div>


    return <CreateOrEditForm post={post} onSubmit={submit} onChange={handleChange} />
}

export default EditPostPage