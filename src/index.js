

/**
 * @param point1 - array i.e [1,2] - Init point of ecuation
 * @param point2 - array i.e [3,4] - End point of ecuation
 * 
 * @return  ecuation =>  [myX, ,mxY, constant]
 */
export const genLinearEcuation = (point1,point2) => {
   const [x1, y1] = point1;
   const [x2, y2] = point2;

   const {m, mx, my} = genSlopeValues(x1, y1, x2, y2)

   const constant = ((mx * y1) - (my * x1))
   return [my, mx, constant]
}


/**
 * 
 */
export const genSlopeValues = (x1,y1,x2,y2) => {
   const my = y2 - y1
   const mx = x2 - x1
   const m = my / mx
   return {m, mx, my}
}


export const getPointOfIntersection = (r1, r2) => {
   const [x1,y1,c1] = r1.map(element => element * r2[0])
   const [x2,y2,c2] = r2.map(element => element * -r1[0])

   const y = -(c1 + c2)/(y1 + y2)
   const x = - (c1 - (y1*y)) / x1
   return [x, y];
}

/**
 * From the formula m = -a / b
 * @param {Array} r1 - Straigh / linear ecuation
 * 
 * @return {Number} - slope
 */
export const getStraighSlope = (r1) => {
   return - r1[0] / r1[1]
}

/**
 * 
 */
export const getSlopeAngle = () => 


export default {
   genLinearEcuation,
   genSlopeValue
}