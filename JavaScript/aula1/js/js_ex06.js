var nome, n1, n2, sub;
nome=prompt("Qual seu nome?")
n1=parseFloat(prompt(nome+" digite um valor."))
n2=parseFloat(prompt(nome+" digite outro valor."))
if(n2==0){
    alert(nome+" não é possivel calcular")
    document.write("<h2>"+nome+" não é possivel calcular<h2>")
}
else{
    div=n1/n2
}
alert(nome+" o resultado é "+div)
document.write("<h2>"+nome+" o resultado é "+div+"<h2>")