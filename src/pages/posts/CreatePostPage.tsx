import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { createPost } from "../../services/posts.service";


const CreatePostPage = () => {
    const [title, setTitle] = useState<string>("")
    const [subtitle, setSubtitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const navigate = useNavigate();

    const submit = () => {
        createPost({
            title,
            subtitle,
            body,
        })

        navigate("/posts")
    }


    return <form onSubmit={submit}>
        <div className="flex flex-col">
            <label>Title</label>
            <input name="title" onChange={(v => setTitle(v.target.value))} />
        </div>

        <div className="flex flex-col">
            <label>Subtitle</label>
            <input name="subtitle" onChange={(v => setSubtitle(v.target.value))} />
        </div>

        <div className="flex flex-col">
            <label>Body</label>
            <textarea name="body" onChange={(v => setBody(v.target.value))} />
        </div>
        <Button>Create</Button>
    </form>
}

export default CreatePostPage