const path = require("path")

test("",()=>{
  console.log(path.resolve("../build/isCheck"));
  expect(7).toBe(7);
})