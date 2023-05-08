
/*Ex 1*/
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*Ex 2*/
const numeros = [2, 4, 6, 8];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(`Soma: ${soma}`);

/*Ex 3*/
function removerNegativos(array) {
  return array.filter(numero => numero >= 0);
}

const numeros = [-1, 1, -2, 2, -3, 3];
const numerosSemNegativos = removerNegativos(numeros);

console.log(numerosSemNegativos);

/*Ex 4*/
git remote add origin https://github.com/TrenAcetCoder/TDE0805.git
git branch -M main
git push -u origin main