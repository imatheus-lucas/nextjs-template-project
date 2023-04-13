import { getByRole, render } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("should render correctly", () => {
    const { getByText, container } = render(<Button label="Test" />);

    expect(getByText("Test")).toBeInTheDocument();
    expect(getByRole(container, "button")).toBeInTheDocument();
  });
});
