const theSum = require('../sum');

// test(name,fct,timeout)
// it(name,fct,timeout)

test("Return the number",()=>{
    expect(theSum(10)).toBe(10);
})

test("Return 0 if ther is no number",()=>{
    expect(theSum()).toBe(0);
})

test("Return the num1+num2",()=>{
    expect(theSum(10,25)).toBe(35);
})

test("Return the num1+num2+num3",()=>{
    expect(theSum(10,20,30)).toBe(60);
})

test("Return the num1+num2+num3+num4",()=>{
    expect(theSum(10,20,30,10)).toBe(70);
})

test("Return the Result of all numbers",()=>{
    expect(theSum(10,20,30,10+100+100)).toBe(270);
})
