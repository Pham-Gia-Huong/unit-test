
let build = require("../build/isCheck");
test("check data",()=>{
  expect(build.check()).toEqual([1,2]);
})