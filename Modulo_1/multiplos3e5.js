// |

var multiplos = [];
for (var i = 3; i < 1000; i++) {
     if(( i % 3 === 0 )  || (i % 5 === 0))  {
     multiplos.push (i)
}

     }

var sum = 0;
for ( i = 0; i < multiplos.length; i++) {
    sum += multiplos[i];

}
    console.log(sum);







