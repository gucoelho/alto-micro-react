import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "@services/posts.service";
import { NewPost, Post } from "@models";
import CreateOrEditForm from "@components/molecules/CreateOrEditForm";


const CreatePostPage = () => {
    const [post, setPost] = useState<NewPost>({
        body: "",
        title: "",
        subtitle: ""
    })

    const handleChange = <P extends keyof Post>(prop: P, value: Post[P]) =>
        setPost({ ...post, [prop]: value })

    const navigate = useNavigate();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createPost(post)
        navigate("/posts")
    }

    return <CreateOrEditForm post={post} onChange={handleChange} onSubmit={submit} />
}

export default CreatePostPage

