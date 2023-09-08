import { 
   genLinearEquation, 
   genSlopeValues,
   getPointOfIntersection,
   getStraighSlope,
   getPositiveEquation,
   multiplyLinearEquation,
   getSlopeAngle,
   getDistanceBetweenTwoPoints
} from "../src/index";

describe('algebraic operations', () => { 
   it("genLinearEquation: generate an linear equation", () => {
      const equation = genLinearEquation([3,2],[-1,-2])
      expect(equation).toEqual([1,-1,-1]);
   })

   it("genSlopeValues: generate slope values", () => {
      const slopeValues = genSlopeValues(6,4,2,6)
      expect(slopeValues).toMatchObject({m: -0.5, my: 2, mx:-4})
   })

   it('getStraighSlop: eget straight slope points', () => {
      const equation = genLinearEquation([6,4],[2,6])
      const point = getStraighSlope(equation)

      expect(point).toEqual(0.5);
   });
   
   it('getPositiveEquation: get positive equation with positive x', () => {
      const r1 = [2, 1, -5]
      const equation = getPositiveEquation(r1)
      expect(equation).toEqual([2, 1, -5])
   });

   it('getPositiveEquation: get positive equation with negative x', () => {
      const r1 = [-2, -1, 5]
      const equation = getPositiveEquation(r1)
      expect(equation).toEqual([2, 1, -5])
   });

   it('getPointOfIntersection: get point of intersection in two straight (X in r2 is negative)', () => {
      const r1 = [ 4,-1,-1 ]
      const r2 = [-2, -1, 5]
      const point = getPointOfIntersection(r1, r2);

      expect(point).toEqual([1, 3]);
   });

   it('multiplyLinearEquation: multiply equation for a escalar value', () => {
      const r1 = [ 4,-1,-1 ]
      const equation = multiplyLinearEquation(r1, 2);

      expect(equation).toEqual([8, -2, -2]);
   });

   it('getPointOfIntersection: get point of intersection in two straight (X in r2 is positive)', () => {
      const r1 = [ 4,-1,-1 ]
      const r2 = [ 2, 1,-5 ]
      const point = getPointOfIntersection(r1, r2);

      expect(point).toEqual([1, 3]);
   });

   it('getSlopeAngle: get arc tang from slope value with angle < 90', () => {
      const slopeValue = 0.624869352;
      const angle = getSlopeAngle(slopeValue);

      expect(parseInt(angle)).toEqual(32);
   });

   it('getSlopeAngle: get arc tang from slope value with angle > 90', () => {
      const slopeValue = -1.732050808;
      const angle = getSlopeAngle(slopeValue);

      expect(parseInt(angle)).toEqual(119);
   });

   it('getDistanceBetweenTwoPoints: distance with (x, y) to (0,0)', () => {
      const distance = getDistanceBetweenTwoPoints(4, 3)
      expect(distance).toEqual(5)
   });
})