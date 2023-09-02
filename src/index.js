

/**
 * @param point1 - array i.e [1,2]
 * @param point2 - array i.e [1,2]
 * 
 * @return  
 */
const genLinearEcuation = (point1, point2) => {
   const [x1, y1] = point1;
   const [x2, y2] = point2;

   const {m, mx, my} = genSlopeValue(x1, y1, x2, y2)

   /**
    *  x, y, coefficient
    */
   const coefficient =  
   const ecuation = [mx,my, ]
}


/**
 * 
 */
const genSlopeValue = (x1,y1,x2,y2) => {
   const my = y2 - y1
   const mx = x2 - x1
   return {m, mx, my}
}

export default {
   
}