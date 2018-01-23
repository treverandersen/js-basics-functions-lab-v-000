// Code your solution in this file!
function distanceFromHqInBlocks(d) {
  let b = 42
  if (b > d) {
    return b - d
  } else if (b < d) {
    return d - b
  }
}

function distanceFromHqInFeet(b) {
  let f = 264
  return distanceFromHqInBlocks(b) * f
}

function distanceTravelledInFeet(a, b) {
  if (a > b) {
    return (a - b) * 264
  } else if (a < b) {
    return (b - a) * 264
  }
}
