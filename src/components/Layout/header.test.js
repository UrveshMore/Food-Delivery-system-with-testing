import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("testting header", () => {
  test("test header get by test id", async () => {
    render(<Header />);
    const headElement = screen.getByTestId("header");
    expect(headElement).toBeInTheDocument();
  });
  test("cheaking  cart button", () => {
    render(<Header />);
    const buttonElements = screen.getByRole("button", { name: /Your cart/i });
    fireEvent.click(buttonElements);
  });
  test("test header get by title", async () => {
    render(<Header />);
    const headerElement = screen.getByTitle("header01");
    expect(headerElement).toBeInTheDocument();
  });
  test("test header get by text", async () => {
    render(<Header />);
    const headingElement = screen.getByText(/Food Ordering App/i);
    expect(headingElement).toBeInTheDocument();
  });
  test("test header Query by text", async () => {
    render(<Header />);
    const headingElements = screen.queryByText(/Food Ordering App/i);
    expect(headingElements).toBeInTheDocument();
  });

  test("testing header", () => {
    render(<Header />);
    const cartElement = screen.getByText(/Food Ordering App/);
    expect(cartElement).toBeVisible();
  });
  test("cheaking headers", () => {
    render(<Header />);
    const cartElements = screen.getByText(/Your Cart/);
    expect(cartElements).toContainHTML("span");
  });
  test("cheaking headers", () => {
    render(<Header />);
    const cartsElements = screen.getByText(/Food Ordering App/);
    expect(cartsElements).toContainHTML("h1");
  });
  test("cheaking headers", () => {
    render(<Header />);
    const cartElement = screen.getByText(/Food Ordering App/);
    expect(cartElement).not.toBeFalsy();
  });
  test("cheaking headers", () => {
    render(<Header />);
    const cartBElements = screen.getByText(/Your Cart/);
    expect(cartBElements).toBeTruthy();
  });
});
