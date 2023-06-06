import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";
import { vi, describe, test } from "vitest";

describe("Input", () => {
    test("renders correctly", () => {
        const label = "Username";
        const name = "username";
        const onChange = vi.fn();

        const { getByLabelText } = render(
            <Input label={label} name={name} onChange={onChange} />
        );

        expect(getByLabelText(label)).toBeInTheDocument();
    });

    test("triggers onChange when input value changes", () => {
        const label = "Username";
        const name = "username";
        const onChange = vi.fn();

        const { getByLabelText } = render(
            <Input label={label} name={name} onChange={onChange} />
        );

        const inputElement = getByLabelText(label);

        fireEvent.change(inputElement, { target: { value: "JohnDoe" } });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.any(Object));
        expect(onChange.mock.calls[0][0].target.value).toBe("JohnDoe");
    });
});