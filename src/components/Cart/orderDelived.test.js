import { fireEvent, render, screen } from "@testing-library/react";
import OrderDelivered from "./OrderDelivered";

describe("testing orderDelivered Componnent", () => {
  test("testing component", () => {
    render(<OrderDelivered />);
    const orderDeliveredElement = screen.getByTitle("order");
    expect(orderDeliveredElement).toBeInTheDocument();
  });
  test("testing component", () => {
    render(<OrderDelivered />);
    const orderElement = screen.getByTitle("order");
    expect(orderElement).toBeInTheDocument();
  });
  test("testing button", () => {
    render(<OrderDelivered />);
    const buttonElements = screen.getByRole("button", { name: /Close/i });
    fireEvent.click(buttonElements);
  });
  test("test Order getByTitle", async () => {
    render(<OrderDelivered />);
    const hElement = screen.getByTitle("order");
    expect(hElement).toBeTruthy();
  });
  test("test Order getByText", async () => {
    render(<OrderDelivered />);
    const headerElement = screen.getByText(
      /Thank you so much for your order!/i
    );
    expect(headerElement).toBeTruthy();
  });
  test("testing component", () => {
    render(<OrderDelivered />);
    const ordersElements = screen.getByText(
      /Thank you so much for your order!/i
    );
    expect(ordersElements).toContainHTML("h2");
  });
  test("testing component", () => {
    render(<OrderDelivered />);
    const cartElements = screen.getByText(/THANKYOU10./i);
    expect(cartElements).toContainHTML("b");
  });
});
