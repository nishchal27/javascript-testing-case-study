//test-driven development

import { describe, expect, it } from "vitest"
import { calculateAverage } from "../src/tdd";

describe('calculateAverage', () => { 
    it('should return NaN if given empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    })

    it('should calculate the average of an array with two elements', () => {
        expect(calculateAverage([1,2])).toBe(1.5);
    })

    it('should calculate the average of an array with three elements', () => {
        expect(calculateAverage([1,2,3])).toBe(2);
    })
 })