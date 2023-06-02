import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { Mock, describe, expect, test, vi } from 'vitest'
import { getAllPosts } from '@services/posts.service';
import { PostBuilder } from '@builders/post.builder'
import * as router from "react-router-dom";

vi.mock("@services/posts.service",  () => ({
  getAllPosts: vi.fn()
}))

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn,
}));

const mockNavigate = vi.fn()
const getAllPostsMock = getAllPosts as Mock
const mockPosts = new PostBuilder().generate(5)

getAllPostsMock.mockReturnValue(mockPosts)

describe("SearchBar", () => {

  beforeEach(() => vi.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate))

  afterEach(() => vi.clearAllMocks())

  test("renders without errors", () => {
    render(<SearchBar />);

    expect(screen.getByLabelText("Search the site")).toBeInTheDocument();
  });

  test("input field renders with correct initial state", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Enter keyword");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("");
  });

  test("typing in the input field updates the value", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Enter keyword");
    fireEvent.change(inputElement, { target: { value: "example" } });

    expect(inputElement).toHaveValue("example");
  });

  test("list of posts is filtered correctly", async () => {
    const exptectedPost = new PostBuilder().withTitle("Example Post Title").generate()

    getAllPostsMock.mockReturnValue([...mockPosts, exptectedPost])
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Enter keyword");
    fireEvent.change(inputElement, { target: { value: "Example" } });

    await waitFor(() => {
      const filteredPosts = screen.getAllByRole("listitem");
      expect(filteredPosts.length).toBe(1);
      expect(filteredPosts[0]).toHaveTextContent("Example Post Title");
    })
  });

  test("clicking on a post triggers navigation", () => {
    const mockPost = new PostBuilder().withId("123").withTitle("Example Post Title").generate()

    getAllPostsMock.mockReturnValue([...mockPosts, mockPost])
    //const mockNavigate = vi.spyOn(router, 'useNavigate').mockImplementation(vi.fn)

    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText("Enter keyword");
    fireEvent.change(inputElement, { target: { value: "Example" } });
    const postElement = screen.getByText("Example Post Title");
    fireEvent.click(postElement);

    expect(mockNavigate).toBeCalledWith("/post/123");
  });

  test("state value is reset when a post is clicked", () => {
    const mockPost = new PostBuilder().withId("123").withTitle("Example Post Title").generate()
    getAllPostsMock.mockReturnValue([...mockPosts, mockPost])

    vi.spyOn(router, 'useNavigate').mockImplementation(vi.fn)

    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Enter keyword");
    fireEvent.change(inputElement, { target: { value: "Example" } });
    const postElement = screen.getByText("Example Post Title");
    fireEvent.click(postElement);

    expect(inputElement).toHaveValue("");
  });
});
