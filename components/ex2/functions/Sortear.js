export function sortear(numeros=[],num = 6) {
    for (var i = num; i >= 0; i--) {

        var sorteado = Math.floor(Math.random() * 60 + 1);
        if (numeros.length == 0) {
            numeros.push(sorteado);
        } else {
            var aux = numeros.length;
            for (var j = numeros.length; j >= 0; j--) {
                if (sorteado == numeros[j]) {
                    var sorteado = Math.floor(Math.random() * 60 + 1);
                    j = aux;
                }
            }
            numeros.push(sorteado);
           
        }
    }
    numeros.sort((a, b) => a - b);
   
    return numeros;
}