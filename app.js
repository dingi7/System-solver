
function initArray() {
    this.length = initArray.arguments.length
    for (let i = 0; i < this.length; i++)
    this[i+1] = initArray.arguments[i]
 }

function solve () {

  let eq1 = document.getElementById('eq1').value
  let newEq1 = eq1.split(' ')
  let a11 = newEq1[0]
  let a12 = newEq1[1]
  let a13 = newEq1[2]
  let a14 = newEq1[4]
  
  let eq2 = document.getElementById('eq2').value
  let newEq2 = eq2.split(' ')
  let a21 = newEq2[0]
  let a22 = newEq2[1]
  let a23 = newEq2[2]
  let a24 = newEq2[4]
  
  let eq3 = document.getElementById('eq3').value
  let newEq3 = eq3.split(' ')
  let a31 = newEq3[0]
  let a32 = newEq3[1]
  let a33 = newEq3[2]
  let a34 = newEq3[4]

var a1 = new initArray(parseFloat(a11, 10), parseFloat(a12, 10), parseFloat(a13, 10), parseFloat(a14, 10))

var	a2 = new initArray(parseFloat(a21, 10), parseFloat(a22, 10), parseFloat(a23, 10), parseFloat(a24, 10))

var a3 = new initArray(parseFloat(a31, 10), parseFloat(a32, 10), parseFloat(a33, 10), parseFloat(a34, 10))

var t1 = a1
var t2 = a2
var t3 = a3

// First we need a one in the first spot

  if (a1[1] == 0) { alert("\rThere is a 0 in the first entry of the Matrix you entered\r\rI can't handle that at this time\r\rPlease Re-Enter the Matrix\r ") }

  if (a1[1] != 0) {
      var temp = a1[1]
      for (var i=1; i<=4; i++)
          { a1[i] = a1[i] / temp }
  }

// Now we should have a 1 in the first entry - Now to zero out the column

  var temp = -a2[1]

  for ( var i=1; i<=4; i++ ) {
       a2[i] = a2[i] + (a1[i] * temp) }


  var temp = -a3[1]

  for ( var i=1; i<=4; i++ ) {
       a3[i] = a3[i] + (a1[i] * temp) }

// Next Column  Check if 0 - if not put a 1 there

  if (a2[2] == 0 ) {   		// if = to 0 switch rows
      for (var i=2; i<=4; i++) {
          var temp = a2[i]
               a2[i] = a3[i]
               a3[i] = temp }
  }

  if (a2[2] != 0 ) {
      var temp = a2[2]
      a2[2] = a2[2] / temp		// for statement would have taken longer
      a2[3] = a2[3] / temp
      a2[4] = a2[4] / temp

// zero out column below

  var temp = -a3[2]

  for ( var i=2; i<=4; i++ ) {
       a3[i] = a3[i] + (a2[i] * temp) }

// zero out column above

  var temp = -a1[2]

  for ( var i=2; i<=4; i++ ) {
       a1[i] = a1[i] + (a2[i] * temp) }

}   // ends if != 0



// Final Column

  if (a3[3] != 0 ) {
      var temp = a3[3]
      a3[3] = a3[3] / temp		// for statement would have taken longer
      a3[4] = a3[4] / temp


// zero out column above

  var temp = -a2[3]
  a2[3] = a2[3] + (a3[3] * temp)
  a2[4] = a2[4] + (a3[4] * temp)

  var temp = -a1[3]
  a1[3] = a1[3] + (a3[3] * temp)
  a1[4] = a1[4] + (a3[4] * temp)
  }

// ALWAYS CHECK YOUR WORK

if (t1[1] * a1[4] + t1[2] * a2[4] + t1[3]*a3[4] != t1[4] || t3[1] * a1[4] + t3[2] * a2[4] + t3[3]*a3[4] != t3[4] || t2[1] * a1[4] + t2[2] * a2[4] + t2[3]*a3[4] != t2[4])
  { alert("\rThe Solution I found does not check out\r\rYou may have entered a system of equations which\r have no solution, or infinite solutions.") }

document.getElementById('x1').value=a1[4]
document.getElementById('x2').value=a2[4]
document.getElementById('x3').value=a3[4]

}
