function gerarSenha() {
  const nome = document.getElementById('nome').value.trim();
  if (!nome) {
    document.getElementById('resultado').textContent = "Digite o nome do aluno.";
    return;
  }
  // Pega o último sobrenome
  const partes = nome.split(' ');
  const sobrenome = partes[partes.length - 1].toLowerCase();
  const senha = sobrenome + "07";
  document.getElementById('resultado').innerHTML = `<strong>Senha Inicial: ${senha}</strong>`;
}