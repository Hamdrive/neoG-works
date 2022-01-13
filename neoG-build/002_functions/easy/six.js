// 6. Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.

const typeOfTriangle = (a1, a2, a3) => {
  if (a1 + a2 + a3 != 180) return "Not a triangle";
  if (a1 === a2 && a1 === a3) return "Equilateral triangle";
  if (a1 == a2 || a2 === a3 || a1 === a3) return "Isosceles triangle";
  return "Scalene triangle";
};

console.log(typeOfTriangle(30, 120, 30));
