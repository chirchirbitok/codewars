// Task
// Given a set of points on the plane, find the area of its axis-aligned minimum bounding box.

// The axis-aligned minimum bounding box for a given point set is its minimum bounding box with edges parallel to the (Cartesian) coordinate axes.

// Input/Output
// [input] integer array x

// Non-empty array of integers representing the X coordinates of the points on the plane.

// 2 ≤ x.length ≤ 20,

// -100 ≤ x[i] ≤ 100.

// [input] integer array y

// Array of integers representing the Y coordinates of the points. ith elements of both x and y correspond to a single point.

// y.length = x.length,

// -100 ≤ y[i] ≤ 100.

// [output] an integer

// The desired area.

// Example
// For x = [1, 0, 4] and y = [-1, 2, 2], the output should be 12.

function axisAlignedBoundingBox(x, y) {
    //coding and coding..
    var xMax = Math.max(...x);
    var xMin = Math.min(...x);
    var yMax = Math.max(...y);
    var yMin = Math.min(...y);
    return (xMax-xMin) * (yMax-yMin);
    
  }
  let x = [1, 0, 4];
  let y = [-1, 2, 2];
  console.log(axisAlignedBoundingBox(x,y))