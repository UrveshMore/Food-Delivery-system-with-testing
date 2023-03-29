import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Food Ordering App/i);
  expect(linkElement).toBeInTheDocument();
});

test("all mounted compoents in App.js", () => {
  render(<App />);
  const cartElement = screen.getByText(/Your Cart/i);
  expect(cartElement).toBeInTheDocument;
});

describe("testting header", () => {
  test("test header get by test id", async () => {
    render(<App />);
    const headElement = screen.getByTestId("header");
    expect(headElement).toBeInTheDocument();
  });

  test("test header get by title", async () => {
    render(<App />);
    const headerElement = screen.getByTitle("header01");
    expect(headerElement).toBeInTheDocument();
  });
  test("test header get by text", async () => {
    render(<App />);
    const headingElement = screen.getByText(/Food Ordering App/i);
    expect(headingElement).toBeInTheDocument();
  });
  test("test header Query by text", async () => {
    render(<App />);
    const headingElements = screen.queryByText(/Food Ordering App/i);
    expect(headingElements).toBeInTheDocument();
  });

  test("testing header", () => {
    render(<App />);
    const cartElement = screen.getByText(/Food Ordering App/);
    expect(cartElement).toBeVisible();
  });
  test("cheaking headers", () => {
    render(<App />);
    const cartElements = screen.getByText(/Your Cart/);
    expect(cartElements).toContainHTML("span");
  });
  test("cheaking headers", () => {
    render(<App />);
    const cartsElements = screen.getByText(/Food Ordering App/);
    expect(cartsElements).toContainHTML("h1");
  });
  test("cheaking headers", () => {
    render(<App />);
    const cartElement = screen.getByText(/Food Ordering App/);
    expect(cartElement).not.toBeFalsy();
  });
  test("cheaking headers", () => {
    render(<App />);
    const cartBElements = screen.getByText(/Your Cart/);
    expect(cartBElements).toBeTruthy();
  });
});
