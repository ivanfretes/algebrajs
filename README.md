# linear-equation-js
Library to perform basic algebra and geometry operations

Focus to:
*  point (x,y) and straight 
* r: [constantX, constantY, contents]

<img src="docs/assets/img/43.gif">

### Scope
- [x] Equation of the line
- [x] Point of intersection
- [x] Slope Angle
- [ ] Middle point
- [x] Distance between two points
- [ ] Distance from a point to a line
- [x] Slope of a straight line
- [x] Angle in sexagecimal and radian notation
- [ ] Angle between two lines
- [ ] Complement and Supplement of an angle

### Install
```bash
$ npm i linear-equation
```

### Use

```javascript
   import { genLinearEquation } from 'linear-equation';

   // Get an array with aX + bY + c
   const [a, b, c] = genLinearEcuation(
      [-57.5516653060913, -25.336896667846172 ],
      [-57.552150785923, 25.338130579204833]
   );

   // This is the same than general form of equation
   console.log(`${a}x + ${b}y  + ${c} `)
```





