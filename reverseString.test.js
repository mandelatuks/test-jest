const reverse = require('./reverseString');

test("should pass when string is reversed", () =>{
  expect(reverse('hello')).toMatch('olleh');
   expect(reverse('hello')).not.toMatch('holle');
  
});