let build = require('../build/sum');

test("",()=>{
  expect(build.sum(5,2)).toBe(3);
})