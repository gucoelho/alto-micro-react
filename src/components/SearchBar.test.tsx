import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { describe, expect, test, vi } from 'vitest'

// Mock the useNavigate hook
vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

describe("SearchBar", () => {
  test("renders without errors", () => {
    render(<SearchBar />);
    // Assert that the component renders without throwing any errors
    expect(screen.getByLabelText("Search the site")).toBeInTheDocument();
  });

  test("input field renders with correct initial state", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Enter keyword");
    // Assert that the input field has the correct placeholder and empty value
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("");
  });

  test("typing in the input field updates the value", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Enter keyword");
    fireEvent.change(inputElement, { target: { value: "example" } });
    // Assert that the value in the input field is updated correctly
    expect(inputElement).toHaveValue("example");
  });

  test("list of posts is filtered correctly", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Enter keyword");
    fireEvent.change(inputElement, { target: { value: "example" } });
    // Assert that the list of posts is filtered correctly based on the input value
    const filteredPosts = screen.getAllByRole("listitem");
    expect(filteredPosts.length).toBe(1); // Assuming only one post matches the filter
    expect(filteredPosts[0]).toHaveTextContent("Example Post Title");
  });

  test("clicking on a post triggers navigation", () => {
    const navigate = vi.fn();
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Enter keyword");
    fireEvent.change(inputElement, { target: { value: "example" } });
    const postElement = screen.getByText("Example Post Title");
    fireEvent.click(postElement);
    // Assert that the navigate function is called with the correct path
    expect(navigate).toHaveBeenCalledWith("/post/123"); // Assuming the post ID is 123
  });

  test("state value is reset when a post is clicked", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Enter keyword");
    fireEvent.change(inputElement, { target: { value: "example" } });
    const postElement = screen.getByText("Example Post Title");
    fireEvent.click(postElement);
    // Assert that the component's state value is reset to an empty string
    expect(inputElement).toHaveValue("");
  });
});
