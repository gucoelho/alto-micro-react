import { render, fireEvent } from "@testing-library/react";
import { getAllPosts } from "@services/posts.service";
import ListPostPage from "./PostListPage";
import { Mock, vi } from "vitest";
import * as router from "react-router-dom";

vi.mock("@services/posts.service", () => ({
    getAllPosts: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
}));

const mockNavigate = vi.fn()

describe("ListPostPage", () => {
    const mockPosts = [
        { id: "1", title: "Post 1", subtitle: "Subtitle 1", body: "Body 1" },
        { id: "2", title: "Post 2", subtitle: "Subtitle 2", body: "Body 2" },
    ];

    beforeEach(() => {
        vi.clearAllMocks()
        const getAllPostsMock = getAllPosts as Mock;
        getAllPostsMock.mockReturnValue(mockPosts);
        vi.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate)
    });

    it("renders correctly", () => {
        const { getByText } = render(<ListPostPage />);

        expect(getByText("Add new post")).toBeInTheDocument();

        expect(getByText("Post 1")).toBeInTheDocument();
        expect(getByText("Subtitle 1")).toBeInTheDocument();
        expect(getByText("Post 2")).toBeInTheDocument();
        expect(getByText("Subtitle 2")).toBeInTheDocument();
    });

    it("navigates to the post on card click", () => {
        const { getByText } = render(<ListPostPage />);

        const postCard = getByText("Post 1");

        fireEvent.click(postCard);

        expect(mockNavigate).toHaveBeenCalledWith("/post/1");
    });
});

