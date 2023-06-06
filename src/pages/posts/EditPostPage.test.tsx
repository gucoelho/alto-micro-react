import { render, fireEvent, waitFor } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { editPost, getPostById } from "@services/posts.service";
import EditPostPage from "./EditPostPage";
import { Mock, vi } from "vitest";
import * as router from "react-router-dom";

vi.mock("@services/posts.service", () => ({
    getPostById: vi.fn(),
    editPost: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
    useParams: vi.fn(),
}));

const mockNavigate = vi.fn()

describe("EditPostPage", () => {
    const mockPost = { id: "123", title: "Existing Post" };

    beforeEach(() => {
        vi.clearAllMocks()
        const getPostByIdMock = getPostById as Mock;
        getPostByIdMock.mockReturnValue(mockPost);

        const useParamsMock = useParams as Mock;
        useParamsMock.mockReturnValue({ id: "123" });
        vi.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate)
    });

    it("renders correctly", async () => {
        const { getByLabelText, getByText } = render(<EditPostPage />);

        await waitFor(() => {
            expect(getByLabelText("Title")).toBeInTheDocument();
            expect(getByLabelText("Subtitle")).toBeInTheDocument();
            expect(getByLabelText("Body")).toBeInTheDocument();
            expect(getByText("Save")).toBeInTheDocument();
        });
    });

    it("updates post state on input change", async () => {
        const { getByLabelText } = render(<EditPostPage />);

        await waitFor(() => {
            const titleInput = getByLabelText("Title") as HTMLInputElement;

            fireEvent.change(titleInput, { target: { value: "Updated Title" } });

            expect(titleInput.value).toBe("Updated Title");
        });
    });

    it("calls editPost and navigates on form submission", async () => {
        const { getByText } = render(<EditPostPage />);

        const editPostMock = editPost as Mock;

        const submitButton = getByText("Save");

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(editPostMock).toHaveBeenCalledWith(mockPost);

            expect(mockNavigate).toHaveBeenCalledWith(`/post/${mockPost.id}`);
        });
    });
});