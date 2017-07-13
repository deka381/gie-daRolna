let suma=0;
let suma2=0;
function solution(x) {
    A=[-1,3,-4,5,1,-6,2,1];
    for (let i = 0; i <= x ; i++) {
      suma= suma + A[i];
    }
    for (var j = 0; j >x; j++) {
        suma2 = suma + A[j];
          }
          if (suma=suma2) {
            return console.log("true");
          }else {
            return  console.log(false);
          }

}
solution();
