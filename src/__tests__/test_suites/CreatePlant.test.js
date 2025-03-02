import { render, fireEvent } from '@testing-library/react';
import App from '../../components/App';
test("adds a new plant when the form is submitted", async () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        id: 8,
        name: "Test Plant",
        image: "test.jpg",
        price: "$9.99"
      }),
    })
  );

  fireEvent.change(getByPlaceholderText("Plant name"), {
    target: { value: "foo" },
  });
  fireEvent.change(getByPlaceholderText("Image URL"), {
    target: { value: "foo_plant_image_url" },
  });
  fireEvent.change(getByPlaceholderText("Price"), {
    target: { value: "10" },
  });

  fireEvent.click(getByText("Add Plant"));

  expect(fetch).toHaveBeenCalledWith("http://localhost:6001/plants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "foo", image: "foo_plant_image_url", price: 10 }),
  });
});
