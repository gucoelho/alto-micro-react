import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
    it("renders the hero image with the specified title and subtitle", () => {
        render(<HomePage />);

        const heroTitle = screen.getByText("Hero title");
        const heroSubtitle = screen.getByText("Hero subtitle");

        expect(heroTitle).toBeInTheDocument();
        expect(heroSubtitle).toBeInTheDocument();
    });

    it("renders two columns with content", () => {
        render(<HomePage />);

        const columns = screen.getAllByRole("column");
        expect(columns.length).toBe(2);

        const firstColumn = columns[0];
        const secondColumn = columns[1];

        const firstColumnText = firstColumn.querySelector("p");
        expect(firstColumnText).toHaveTextContent("Lorem ipsum dolor sit amet");

        const firstColumnIframe = firstColumn.querySelector("iframe");
        expect(firstColumnIframe).toBeInTheDocument();

        const secondColumnImages = secondColumn.querySelectorAll("img");
        expect(secondColumnImages.length).toBe(4);
    });
});