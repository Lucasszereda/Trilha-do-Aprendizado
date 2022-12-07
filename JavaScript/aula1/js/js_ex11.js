var n, cont, result

n=parseInt(prompt("Informe um número"))

cont=0

while(cont<11){
    result=n*cont
    document.write("<h2>"+result+"<h2>")
    cont++
}