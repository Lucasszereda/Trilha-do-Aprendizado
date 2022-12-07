var nome, n1, n2, sub;
nome=prompt("Qual seu nome?")
n1=parseFloat(prompt(nome+" digite um valor."))

if(n1 % 7 == 0 && n1 % 3 == 0){
    alert("O número é divisivel por 3 e por 7")
    document.write("O número é divisivel por 3 e por 7")
}
if(n1 % 3 == 0 && n1 % 7 != 0 ){
    alert("O número é divisivel por 3")
    document.write("O número é divisivel por 3")
}
if(n1 % 7 == 0 && n1 % 3 != 0){
    alert("O número é divisivel por 7")
    document.write("O número é divisivel por 7")
}
if(n1 % 7 != 0 && n1 % 3 != 0){
    alert("O número não é divisivel por 3 e nem por 7")
    document.write("O número não é divisivel por 3 e nem por 7")
}

