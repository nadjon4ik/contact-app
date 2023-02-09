import { render, screen } from "@testing-library/react";
import Contact from "./components/Contact";

test("renders learn react link", () => {
  render(<Contact />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
