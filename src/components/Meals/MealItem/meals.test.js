import { fireEvent, render, screen } from "@testing-library/react";
import MealItemForm from "./MealItemForm";

describe("testting meals", () => {
  test("test meals button", () => {
    render(<MealItemForm />);
    const mealElement = screen.getByRole("button", { name: "+ Add" });
    fireEvent.click(mealElement);
  });
  test("test meals button", () => {
    render(<MealItemForm />);
    const mealsElement = screen.getByRole("button", { name: "+ Add" });
    expect(mealsElement).toBeVisible();
  });
  test("test meals button", () => {
    render(<MealItemForm />);
    const mealesElement = screen.getByRole("button", { name: "+ Add" });
    expect(mealesElement).toBeInTheDocument();
  });
});
