var nome, n1, n2, soma;
nome=prompt("Qual seu nome?")
n1=parseFloat(prompt(nome+" Digite um valor."))
n2=parseFloat(prompt(nome+" Digite outro valor."))
soma=n1+n2
alert(nome+" a soma é "+soma)
document.write("<h2>"+nome+" o resultado é "+soma+"<h2>")