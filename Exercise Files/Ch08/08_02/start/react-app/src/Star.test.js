import { render } from "@testing-library/react";
import { Star } from "./Star";

test("renders an h1", () => {
    const { getByText } = render(<Star />);
    const h1 = getByText(/Cool Star Bro/);
    expect(h1).toHaveTextContent("Cool Star Bro");
});