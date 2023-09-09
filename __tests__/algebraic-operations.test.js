import { 
   genLinearEquation, 
   getPointOfIntersection,
   getStraighSlope,
   getEquationWithPositiveX,
   multiplyLinearEquation,
   getSlopeAngle,
   getDistanceBetweenTwoPoints
} from "../src/index";

describe('algebraic operations', () => { 

   it("genLinearEquation: generate a linear equation with integer points", () => {
      // setup
      const points = [
         [[6,4],[2,6]],
         [[-24, -57], [-25, -58]],
      ]

      const equations = [
         [2,4,-28],
         [-1,1,33]
      ]

      for (let i = 0; i < points.length; i++) {
         const point = points[i];
         const equation = genLinearEquation(point[0],point[1])
         expect(equation).toEqual(equations[i]);
      }
   })

   it("genLinearEquation: generate a linear equation with array of lat and lng values", () => {
      const points = [
         [
            [-24.221494268584944,-57.6334127375],
            [-25.839030036221597,-58.2761129328125]
         ],
         [
            [-24.37669642770603,-58.8254293390625], 
            [-26.41113322945823, -57.023671526562]
         ]
      ]

      const equations = [
         [-0.6427001953125,1.617535767636653, 77.65694741669199],
         [1.8017578125005045, 2.0344368017522, 163.59752155783485]
      ]

      // asserts
      for (let i = 0; i < points.length; i++) {
         const point = points[i];
         const equation = genLinearEquation(point[0],point[1])
         expect(equation).toEqual(equations[i]);
      }
   })


   it('getStraighSlop: get straight slope points', () => {
      const equation = genLinearEquation([6,4],[2,6])
      const point = getStraighSlope(equation)

      expect(point).toEqual(-0.5);
   });
   
   it('getPositiveEquation: get positive equation with positive x', () => {
      const r1 = [2, 1, -5]
      const equation = getEquationWithPositiveX(r1)
      expect(equation).toEqual([2, 1, -5])
   });

   it('getPositiveEquation: get positive equation with negative x', () => {
      const r1 = [-2, -1, 5]
      const equation = getEquationWithPositiveX(r1)
      expect(equation).toEqual([2, 1, -5])
   });

   it('getPointOfIntersection: get point of intersection in two straight (X in r2 is negative)', () => {
      const r1 = [ 4,-1,-1 ]
      const r2 = [-2, -1, 5]
      const point = getPointOfIntersection(r1, r2);

      expect(point).toEqual([1, 3]);
   });
   
   it('getPointOfIntersection: get point of intersection in two straight with float params', () => {
      const r1 = [-0.6427001953125,1.617535767636653, 77.65694741669199]
      const r2 = [1.8017578125005045, 2.0344368017522, 163.59752155783485]
      const point = getPointOfIntersection(r1, r2);

      expect(point).toEqual([-25.257742841418306, -58.04514839953447]);
   });

   it('multiplyLinearEquation: multiply equation for a escalar value', () => {
      const r1 = [ 4,-1,-1 ]
      const equation = multiplyLinearEquation(r1, 2);

      expect(equation).toEqual([8, -2, -2]);
   });

   it.only('getPointOfIntersection: get point of intersection in two straight (X in r2 is positive)', () => {
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