import { fireEvent, render } from "@testing-library/react";
import { vi } from "vitest";
import PostCard from "./PostCard";

describe("PostCard", () => {
    const mockPost = {
        id: "1",
        title: "Post 1",
        subtitle: "Subtitle 1",
        body: "Body 1",
    };

    it("renders correctly", () => {
        const onClickMock = vi.fn();
        const { getByText } = render(
            <PostCard post={mockPost} onClick={onClickMock} />
        );

        expect(getByText("Post 1")).toBeInTheDocument();
        expect(getByText("Subtitle 1")).toBeInTheDocument();
        expect(getByText("Body 1")).toBeInTheDocument();
        expect(getByText("See more...")).toBeInTheDocument();
    });

    it("triggers onClick callback on click", () => {
        const onClickMock = vi.fn();
        const { getByText } = render(
            <PostCard post={mockPost} onClick={onClickMock} />
        );

        const postCard = getByText("Post 1");

        fireEvent.click(postCard);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});