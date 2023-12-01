var totalMarks = 500;

var a = prompt("enter marks of physics");
var a=parseInt(a)
var b = prompt("enter marks of chemistry");
var b=parseInt(b)
var c = prompt("enter marks of math");
var c=parseInt(c)
var d = prompt("enter marks of computer");
var d=parseInt(d)
var e = prompt("enter marks of urdu");
var e=parseInt(e)
var f = a + b + c + d + e;

alert(f);
var percentage = (f * 100) / totalMarks;

alert(percentage);