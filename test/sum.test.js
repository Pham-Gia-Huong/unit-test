let build = require('../build/sum');

test("",()=>{
  expect(build.sum(1,2)).toBe(3);
})