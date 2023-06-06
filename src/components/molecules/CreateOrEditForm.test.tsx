import { render, fireEvent } from "@testing-library/react";
import CreateOrEditForm from "./CreateOrEditForm";
import { vi } from "vitest";

describe("CreateOrEditForm", () => {
    it("renders correctly", () => {
        const post = {
            title: "",
            subtitle: "",
            body: "",
        };

        const onChange = vi.fn();
        const onSubmit = vi.fn();

        const { getByLabelText, getByText } = render(
            <CreateOrEditForm post={post} onChange={onChange} onSubmit={onSubmit} />
        );

        expect(getByLabelText("Title")).toBeInTheDocument();
        expect(getByLabelText("Subtitle")).toBeInTheDocument();
        expect(getByLabelText("Body")).toBeInTheDocument();
        expect(getByText("Create")).toBeInTheDocument();
    });

    it("triggers onChange when input values change", () => {
        const post = {
            title: "",
            subtitle: "",
            body: "",
        };

        const onChange = vi.fn();
        const onSubmit = vi.fn();

        const { getByLabelText } = render(
            <CreateOrEditForm post={post} onChange={onChange} onSubmit={onSubmit} />
        );

        fireEvent.change(getByLabelText("Title"), {
            target: { value: "New Title" },
        });

        expect(onChange).toHaveBeenCalledWith("title", "New Title");
    });

    it("triggers onSubmit when the form is submitted", () => {
        const post = {
            title: "Title",
            subtitle: "Subtitle",
            body: "Body",
        };

        const onChange = vi.fn();
        const onSubmit = vi.fn().mockImplementation((e) => e.preventDefault());

        const { getByText } = render(
            <CreateOrEditForm post={post} onChange={onChange} onSubmit={onSubmit} />
        );

        fireEvent.submit(getByText("Create"));

        expect(onSubmit).toHaveBeenCalled();
    });

    it("render Save if post has ID", () => {
        const post = {
            id: "124",
            title: "",
            subtitle: "",
            body: "",
        };

        const onChange = vi.fn();
        const onSubmit = vi.fn().mockImplementation((e) => e.preventDefault());

        const { getByText } = render(
            <CreateOrEditForm post={post} onChange={onChange} onSubmit={onSubmit} />
        );

        expect(getByText("Save")).toBeInTheDocument();
    });
});