'use strict'
function getShuiXianHua() {
    for(let i=100;i<1000;i++){

        if(i==i.toString().charAt(0)*i.toString().charAt(0)*i.toString().charAt(0)+i.toString().charAt(1)*i.toString().charAt(1)*i.toString().charAt(1)+
        i.toString().charAt(2)*i.toString().charAt(2)*i.toString().charAt(2)){
            console.log(i);
        }
    }
}
getShuiXianHua();