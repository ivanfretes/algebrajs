/**
 * @param {array} point1 : i.e [1,2] - Init point of Equation
 * @param {array} point2 : i.e [3,4] - End point of Equation
 * @return {array} : [constantX, ,constantY, C]
 */
export const genLinearEquation = (point1,point2) => {
   const [x1, y1] = point1;
   const [x2, y2] = point2;

   const {m, mx, my} = genSlopeValues([x1, y1], [x2, y2])

   const constant = ((mx * y1) - (my * x1))
   return [my, mx, constant]
}


/**
 * Get the slop value
 * 
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2 
 * @return {Object} : with slote m, mx and my
 */
export const genSlopeValues = ([x1,y1],[x2,y2]) => {
   const my = y2 - y1
   const mx = x2 - x1
   const m = my / mx
   return {m, mx, my}
}


/**
 * Return the point of intersention in two Straigh / linear Equation
 * @param {array} r1 : linear Equation
 * @param {array} r2 :linear Equation
 * @return {array} [ x, y ]
 */
export const getPointOfIntersection = (r1, r2) => {
   r1 = getPositiveEquation(r1)
   r2 = getPositiveEquation(r2)

   const [ x1,y1,c1 ] = multiplyLinearEquation(r1, r2[0])
   const [ x2,y2,c2 ] = multiplyLinearEquation(r2, r1[0] * -1)

   const y = -(c1 + c2) / (y1 + y2)
   const x = - ((y1 * y) + c1) / x1
   return [x, y]
}

/**
 * Multiply each element of the straigth by multiplier
 * 
 * @param {array} r : linear equation
 * @param {number} multiplier : is a x value element
 */
export const multiplyLinearEquation = (r, multiplier) => {
   r = getPositiveEquation(r)

   return r.map(element => element * multiplier)   
}

/**
 * Add inverse multiply for equation, then x is positive
 */
export const getPositiveEquation = (r) => {
   const [first_element] = r;
   if (first_element < 0)
      return r.map(element => element * -1)
   return r
}

/**
 * From the formula m = -a / b
 * @param {array} r : straigh / linear Equation i.e [myX, ,mxY, constant] 
 * @return {number} : slope
 */
export const getStraighSlope = ([a,b]) => {
   return - a / b
}


/**
 * Get slope angle with passed the slope value
 * @param {number} slopeValue
 * @return {number}
 */
export const getSlopeAngle = (slopeValue) => {
   const s = (Math.atan(slopeValue) * 180) / Math.PI
   return s < 0 ? 180 + s : s
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
   genLinearEquation,
   genSlopeValues,
   getDistanceBetweenTwoPoints,
   getSlopeAngle,
   getStraighSlope,
   multiplyLinearEquation,
   getPositiveEquation,
   getDistanceBetweenTwoPoints
}