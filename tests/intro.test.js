import { describe, it, test, expect } from "vitest";    
import { factorial, fizzBuzz, max } from "../src/intro";

// test suite for max function
describe('max', () => {
    //test name
    it('should return the first argument if it is greater', () => {
        //AAA pattern
        // Arrange
        // const a = 2;
        // const b = 1;

        // Act: action
        // const result = max(a, b);

        // Assert: verify it works
        // expect(result).toBe(2);

        // single line of code:
        expect(max(2, 1)).toBe(2);
    });

        //second test
    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2);
    });

        //third test
    it('should return the first argument if arguments are equal', () => {
        expect(max(1, 1)).toBe(1);
    });
})

// test suite for fizzBuzz function
describe('fizzBuzz', () => {
    it('should return FizzBuzz if arg is divisible by 3 and 5', () =>{
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
})

//test suite for factorial function
describe('factorial', () =>{
    it('should return 1 if given 1', () =>{
        expect(factorial(1)).toBe(1);
    });

    it('should return 2 if given 1', () =>{
        expect(factorial(1)).toBe(1);
    });
})