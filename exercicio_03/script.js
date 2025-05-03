function toggleConvenio() {
  const radios = document.getElementsByName('convenio');
  const selectDiv = document.getElementById('selectConvenio');
  for (let radio of radios) {
    if (radio.checked && radio.value === "sim") {
      selectDiv.style.display = "inline-block";
      return;
    }
  }
  selectDiv.style.display = "none";
}

function calcularDesconto(valor, taxa) {
  return valor * taxa;
}

function calcularDescontoFinal() {
  const valor = parseFloat(document.getElementById('valor').value.replace(',', '.'));
  const convenio = document.querySelector('input[name="convenio"]:checked').value;
  let taxa = 0.10; // padrão: sem convênio

  if (isNaN(valor) || valor <= 0) {
    document.getElementById('resultado').textContent = 'Informe um valor válido para a vacina.';
    return;
  }

  if (convenio === 'sim') {
    const tipo = document.getElementById('selectConvenio').value;
    if (tipo === 'amigo') {
      taxa = 0.20;
    } else if (tipo === 'saude') {
      taxa = 0.50;
    }
  }

  const desconto = calcularDesconto(valor, taxa);
  const aPagar = valor - desconto;

  document.getElementById('resultado').innerHTML =
    `Desconto R$: ${desconto.toFixed(2)}<br><br>A Pagar R$: ${aPagar.toFixed(2)}`;
}