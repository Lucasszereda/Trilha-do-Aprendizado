var nome, n1, n2, sub;
nome=prompt("Qual seu nome?")
n1=parseFloat(prompt(nome+" digite um valor."))
if(n1 % 2 == 0){
    alert("O número é par")
    document.write("O número é par")
}
else{
    alert("O número é impar")
    document.write("O número é impar")
}
