var cotDolar = 5;
var cotEuro = 6;

// Temperatura
function CF(){
  document.getElementById("farenheit").value = ((parseFloat(document.getElementById("celsius").value) * 1.8) + 32).toFixed(2);
}

function FC(){
  document.getElementById("celsius").value = ((parseFloat(document.getElementById("farenheit").value) - 32 ) / 1.8).toFixed(2);
}

function CK(){
  document.getElementById("kelvin").value = (parseFloat(document.getElementById("celsius2").value) + 273.15).toFixed(2);
}

function KC(){
  document.getElementById("celsius2").value = (parseFloat(document.getElementById("kelvin").value) - 273.15).toFixed(2);
}

function FK(){
  document.getElementById("kelvin2").value = ((parseFloat(document.getElementById("farenheit2").value) + 459.67) * (5/9)).toFixed(2);
}

function KF(){
  document.getElementById("farenheit2").value = ((parseFloat(document.getElementById("kelvin2").value) * (9/5)) - 459.67 ).toFixed(2);
}

// Moedas
function Converter() {
  var valorReal = document.getElementById("valor");
  var valorDolar = parseFloat(valorReal.value) * cotDolar;
  var valorEuro = parseFloat(valorReal.value) * cotEuro;
  var dolar = document.getElementById("dolar");
  var euro = document.getElementById("euro");

  dolar.innerHTML = "U$ " + valorDolar;
  euro.innerHTML = "E$ " + valorEuro;
}