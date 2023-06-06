import { Button, Input, TextArea } from "@components/atoms"
import { NewPost, Post } from "@models"

type CreateOrEditFormProps = {
    post: Post | NewPost,
    onChange: <P extends keyof Post>(prop: P, value: Post[P]) => void,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const CreateOrEditForm = ({ post, onChange, onSubmit }: CreateOrEditFormProps) => {
    return <form onSubmit={onSubmit}>
        <Input label="Title" value={post.title} name="title" onChange={e => onChange("title", e.target.value)} />
        <Input label="Subtitle" value={post.subtitle} name="subtitle" onChange={e => onChange("subtitle", e.target.value)} />
        <TextArea label="Body" value={post.body} name="body" onChange={e => onChange("body", e.target.value)} />
        <Button type="submit">{(post as Post).id ? "Save" : "Create"}</Button>
    </form>
}

export default CreateOrEditForm

