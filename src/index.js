/**
 * @param {array} point1 # i.e [1,2] - Init point of ecuation
 * @param {array} point2 i.e [3,4] - End point of ecuation
 * @return {array} ecuation =>  [myX, ,mxY, constant]
 */
export const genLinearEcuation = (point1,point2) => {
   const [x1, y1] = point1;
   const [x2, y2] = point2;

   const {m, mx, my} = genSlopeValues(x1, y1, x2, y2)

   const constant = ((mx * y1) - (my * x1))
   return [my, mx, constant]
}


/**
 * Get the slop value
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2 
 * @return {Object} - with slote m, mx and my
 */
export const genSlopeValues = (x1,y1,x2,y2) => {
   const my = y2 - y1
   const mx = x2 - x1
   const m = my / mx
   return {m, mx, my}
}


/**
 * Return the point of intersention in two Straigh / linear ecuation
 * @param {array} -r1 
 * @param {array} -r2
 * @return {array} [ x, y ]
 */
export const getPointOfIntersection = (r1, r2) => {
   const [ x1,y1,c1 ] = r1.map(element => element * r2[0])
   const [ x2,y2,c2 ] = r2.map(element => element * -r1[0])

   const y = -(c1 + c2) / (y1 + y2)
   const x = - (c1 - (y1 * y)) / x1
   return [x, y];
}


/**
 * From the formula m = -a / b
 * @param {array} r - straigh / linear ecuation i.e [myX, ,mxY, constant] 
 * @return {number} - slope
 */
export const getStraighSlope = ([a,b]) => {
   return - a / b
}


/**
 * Get slope angle with slope value
 * @param {number} slopeValue
 * @return {number}
 */
export const getSlopeAngle = (slopeValue) => {
   const s = (Math.atan(slopeValue) * 180) / Math.PI
   return s < 0 ? 180 + s : s
}


/**
 * Get slope angle with x and y params
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export const getSlopeAngle2 = (x, y) => {
   return (Math.atan2(y, x) * 180) / Math.PI
}


/**
 * Get the distance between two points
 * @param {number} x - only one value or substrac operation (x2 - x1) 
 * @param {number} y - only one value or substrac operation (y2 - y1)  
 * @return {number}
 */
export const getDistanceBetweenTwoPoints = (x, y) => {
   return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}


export default {
   genLinearEcuation,
   genSlopeValues,
   getDistanceBetweenTwoPoints,
   getSlopeAngle2,
   getSlopeAngle,
   getStraighSlope
}