import { repeatedItem } from "./repeatedItem";

test("repeatedItem", () => {
  expect(repeatedItem([1, 2, 3, 4, 5])).toMatchObject({ type: "not-found" });
  expect(repeatedItem([1, 3, 3, 4, 3])).toMatchObject({
    type: "found",
    item: 3,
  });
});
