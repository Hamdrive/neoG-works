// 2. Given length of a regular hexagon, your function should return area of the hexagon.

const areaOfHexagon = (side) =>
  (((3 * Math.sqrt(3)) / 2) * side * side).toFixed(2);

console.log(areaOfHexagon(8));
