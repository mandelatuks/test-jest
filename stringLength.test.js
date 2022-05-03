const strLength = require('./stringLength');

test("takes a text as parameter and returns its length", () => {
  expect(strLength("twitter")).toBe(7);
  expect (() => {
       strLength("the bird is free");
  }).toThrow();
  expect (() =>{
    strLength("");
  }).toThrow();
})
