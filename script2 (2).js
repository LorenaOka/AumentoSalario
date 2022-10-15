let salario=prompt('Qual seu salario atual?');
salario=Number(salario)
let paumento=prompt('qual a porcentagem de aumento do seu salario');
paumento=Number(paumento);
let aumento;
aumento= (paumento/100)*salario;
document.write('seu salario aumentou '+ aumento + ' reais');