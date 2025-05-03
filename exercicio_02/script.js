function validarNome(nome) {
  const partes = nome.trim().split(/\s+/);
  return partes.length >= 2;
}

function obterSobrenome(nome) {
  const partes = nome.trim().split(/\s+/);
  return partes[partes.length - 1].toLowerCase();
}

function contarVogais(nome) {
  const vogais = nome.match(/[aeiouáéíóúãõâêîôûàèìòùäëïöü]/gi);
  const total = vogais ? vogais.length : 0;
  return total.toString().padStart(2, '0');
}

function processarNome() {
  const nome = document.getElementById('nome').value;
  const resultado = document.getElementById('resultado');

  if (!validarNome(nome)) {
      resultado.textContent = "Por favor, digite o nome completo (nome e sobrenome).";
      resultado.style.color = "red";
      return;
  }

  const sobrenome = obterSobrenome(nome);
  const numVogais = contarVogais(nome);
  resultado.textContent = `Senha inicial: ${sobrenome}${numVogais}`;
  resultado.style.color = "#1976d2";
}