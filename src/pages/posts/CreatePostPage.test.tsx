import { render, fireEvent, waitFor } from "@testing-library/react";
import { createPost } from "@services/posts.service";
import CreatePostPage from "./CreatePostPage";
import { Mock, vi } from "vitest";
import * as router from "react-router-dom";

vi.mock("@services/posts.service", () => ({
    createPost: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
}));

const mockNavigate = vi.fn()

describe("CreatePostPage", () => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate)
    })

    it("renders correctly", () => {
        const { getByLabelText, getByText } = render(<CreatePostPage />);

        expect(getByLabelText("Title")).toBeInTheDocument();
        expect(getByLabelText("Subtitle")).toBeInTheDocument();
        expect(getByLabelText("Body")).toBeInTheDocument();
        expect(getByText("Create")).toBeInTheDocument();
    });

    it("updates post state on input change", () => {
        const { getByLabelText } = render(<CreatePostPage />);

        const titleInput = getByLabelText("Title") as HTMLInputElement;

        fireEvent.change(titleInput, { target: { value: "New Title" } });

        expect(titleInput.value).toBe("New Title");
    });

    it("calls createPost and navigates on form submission", async () => {
        const createPostMock = createPost as Mock;

        const { getByText } = render(<CreatePostPage />);

        const submitButton = getByText("Create");

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(createPostMock).toHaveBeenCalledWith({
                body: "",
                title: "",
                subtitle: "",
            });

            expect(mockNavigate).toHaveBeenCalledWith("/posts");
        });
    });
});