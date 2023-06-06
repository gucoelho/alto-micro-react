import { Post } from "@models/index"

type PostCardProps = {
    post: Post,
    onClick: () => void
}

const PostCard = ({ post, onClick }: PostCardProps) => <div className="group flex flex-col shadow p-2 mb-1 cursor-pointer hover:shadow-md" onClick={onClick}>
    <div className="flex">
        <h3 className="font-bold">{post.title}</h3>
    </div>
    <h5>{post.subtitle}</h5>
    <p dangerouslySetInnerHTML={{ __html: post.body }} />

    <span className="self-end group-hover:text-amber-500">See more...</span>
</div>

export default PostCard