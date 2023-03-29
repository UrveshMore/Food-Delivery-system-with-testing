import { fireEvent, render, screen } from "@testing-library/react";
import HeaderCartButton from "./HeaderCartButton";

describe("testing header cart button ", () => {
  test("cheaking cartbuttons", () => {
    render(<HeaderCartButton />);
    const cartButtonElement = screen.getByText(/Your Cart/);
    expect(cartButtonElement).toBeVisible();
  });
  test("cheaking cart button", () => {
    render(<HeaderCartButton />);
    const buttonElements = screen.getByRole("button", { name: /Your cart/i });
    fireEvent.click(buttonElements);
  });
  test("cheaking headers", () => {
    render(<HeaderCartButton />);
    const cartBElements = screen.getByTestId("cart");
    expect(cartBElements).toBeTruthy();
  });
  test("cheaking cartbuttons", () => {
    render(<HeaderCartButton />);
    const cartButtonElements = screen.getByText(/Your Cart/);
    expect(cartButtonElements).toContainHTML("span");
  });
  test("cheaking cartheaders", () => {
    render(<HeaderCartButton />);
    const cartElement = screen.getByText(/Your Cart/);
    expect(cartElement).not.toBeFalsy();
  });
  test("cheaking cartheaders", () => {
    render(<HeaderCartButton />);
    const cartBElements = screen.getByText(/Your Cart/);
    expect(cartBElements).toBeTruthy();
  });
  test("cheaking cartheaders", () => {
    render(<HeaderCartButton />);
    const cartBElements = screen.getByText(/Your Cart/);
    expect(cartBElements).toBeTruthy();
  });
});
