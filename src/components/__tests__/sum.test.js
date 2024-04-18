import { sum } from "../sum"


test("sum function should calculate the sum of two numbers",()=>{
  const result=sum(2,4);
  expect(result).toBe(6);
})
// dunder method __test__ two underscore before and after

// headers.test.js another way to write test case
// heasers.spec.js
