import { 
   genLinearEquation, 
   genSlopeValues,
   getPointOfIntersection,
   getStraighSlope,
   getPositiveEquation
} from "../src/index";

describe('algebraic operations', () => { 
   it("generate an linear equation", () => {
      const equation = genLinearEquation([6,4],[2,6])
      expect(equation).toEqual([2,-4,-28]);
   })

   it("generate slope values", () => {
      const slopeValues = genSlopeValues(6,4,2,6)
      expect(slopeValues).toMatchObject({m: -0.5, my: 2, mx:-4})
   })

   it('get straight slope points', () => {
      const equation = genLinearEquation([6,4],[2,6])
      const point = getStraighSlope(equation)

      expect(point).toEqual(0.5);
   });
   
   it('get positive equation with positive x', () => {
      const r1 = [2, 1, -5]
      const equation = getPositiveEquation(r1)
      expect(equation).toEqual([2, 1, -5])
   });

   it('get positive equation with negative x', () => {
      const r1 = [-2, -1, 5]
      const equation = getPositiveEquation(r1)
      expect(equation).toEqual([2, 1, -5])
   });

   it('get point of intersection in two straight (X in r2 is negative)', () => {
      const r1 = [ 4,-1,-1 ]
      const r2 = [-2, -1, 5]
      const point = getPointOfIntersection(r1, r2);

      expect(point).toEqual([1, 3]);
   });

   it('get point of intersection in two straight (X in r2 is positive)', () => {
      const r1 = [ 4,-1,-1 ]
      const r2 = [2, 1, -5]
      const point = getPointOfIntersection(r1, r2);

      expect(point).toEqual([1, 3]);
   });
})