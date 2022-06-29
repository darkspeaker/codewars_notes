// AB = √(xb - xa)^2 + (yb - ya)^2 + (zb - za)^2 =

function euclideanDistance(point1, point2){
  return +Math.sqrt(point1.map( (item, idx) => Math.pow(point2[idx] - item, 2) ).reduce( (accam, val) => accam + val )).toFixed(2)
}
let [p1,p2] = [[-1,2,5],[2,4,9]]
// [p1,p2] = [[-1,2],[-3,4]]
// let p1 = [-1], p2 = [2];

console.log(euclideanDistance(p1, p2))