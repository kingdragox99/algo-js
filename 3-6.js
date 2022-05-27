
const Array = ['hello', 'world', 'this', 'is', 'great'];

var world ='';
function smash (n) {
for(var i = 0; i < n.length; i++) {
    world += n[i] + ' ';
}
}
smash (Array);
console.log(world);