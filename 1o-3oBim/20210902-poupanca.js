function rendimento(saldo, taxa, meses) {
    i = meses
    // taxa = 10
    // qd estou falando de uma taxa de 10%
    taxaMatematica = taxa/100
    while (i > 0) {
        saldo = saldo + saldo*taxaMatematica
        i--
    }
    return saldo
}
    
console.log(rendimento(10, 10, 2))