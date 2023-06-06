import { fireEvent, render, waitFor } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { getPostById } from "@services/posts.service";
import PostPage from "./PostPage";
import * as router from "react-router-dom";
import { Mock, vi } from "vitest";

vi.mock("@services/posts.service", () => ({
    getPostById: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
    useParams: vi.fn(),
}));

const mockNavigate = vi.fn()

describe("PostPage", () => {
    const mockPost = {
        id: "1",
        title: "Post 1",
        subtitle: "Subtitle 1",
        body: "<p>Body 1</p>",
    };

    beforeEach(() => {
        vi.clearAllMocks()
        const getPostByIdMock = getPostById as Mock;
        getPostByIdMock.mockReturnValue(mockPost);

        const useParamsMock = useParams as Mock;
        useParamsMock.mockReturnValue({ id: "1" });

        vi.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate)
    });

    it("renders correctly", async () => {
        const { getByText } = render(<PostPage />);

        await waitFor(() => {
            expect(getByText("Edit post")).toBeInTheDocument();

            expect(getByText("Post 1")).toBeInTheDocument();
            expect(getByText("Subtitle 1")).toBeInTheDocument();
            expect(getByText("Body 1")).toBeInTheDocument();
        });

        const editButton = getByText("Edit post");
        fireEvent.click(editButton);

        expect(mockNavigate).toHaveBeenCalledWith("/post/1/edit");
    });

    it("renders 'Post not found' when post is undefined", async () => {
        const getPostByIdMock = getPostById as Mock;
        getPostByIdMock.mockReturnValue(undefined);

        const { getByText } = render(<PostPage />);

        await waitFor(() => {
            expect(getByText("Post not found")).toBeInTheDocument();
        });
    });
});