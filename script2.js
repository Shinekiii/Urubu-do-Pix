const metodoPagamentoSelect = document.getElementById('metodoPagamento');
const cartaoForm = document.getElementById('cartaoForm');
const numeroCartaoInput = document.getElementById('numeroCartao');
const bandeiraCartao = document.getElementById('bandeiraCartao');

metodoPagamentoSelect.addEventListener('change', function () {
  if (metodoPagamentoSelect.value === 'cartao') {
    cartaoForm.classList.remove('hidden');
  } else {
    cartaoForm.classList.add('hidden');
    resetarCamposCartao();
  }
});

numeroCartaoInput.addEventListener('input', function () {
  const numeroCartao = numeroCartaoInput.value;
  const bandeira = detectarBandeiraCartao(numeroCartao);
  mostrarBandeiraCartao(bandeira);
});

function detectarBandeiraCartao(numeroCartao) {
  if (/^4/.test(numeroCartao)) {
    return 'visa';
  } else if (/^5[1-5]/.test(numeroCartao)) {
    return 'mastercard';
  } else if (/^3[47]/.test(numeroCartao)) {
    return 'amex';
  } else if (/^6(?:011|5)/.test(numeroCartao)) {
    return 'discover';
  } else {
    return 'unknown';
  }
}

function mostrarBandeiraCartao(bandeira) {
  if (bandeira !== 'unknown') {
    bandeiraCartao.style.backgroundImage = `url('./img/${bandeira}.png')`;
  } else {
    bandeiraCartao.style.backgroundImage = '';
  }
}

function resetarCamposCartao() {
  document.getElementById('nomeCartao').value = '';
  document.getElementById('numeroCartao').value = '';
  document.getElementById('cvvCartao').value = '';
  document.getElementById('validadeCartao').value = '';
  bandeiraCartao.style.backgroundImage = '';
}

document.getElementById('confirmarPagamento').addEventListener('click', function () {
  const metodoPagamentoSelecionado = metodoPagamentoSelect.value;
  if (metodoPagamentoSelecionado === 'pix') {
    // Lógica para pagamento via Pix
  } else if (metodoPagamentoSelecionado === 'cartao') {
    // Lógica para pagamento via cartão de crédito
    const nomeCartao = document.getElementById('nomeCartao').value;
    const numeroCartao = document.getElementById('numeroCartao').value;
    const cvvCartao = document.getElementById('cvvCartao').value;
    const validadeCartao = document.getElementById('validadeCartao').value;

    // Simulação de validação dos campos do cartão
    if (nomeCartao && numeroCartao && cvvCartao && validadeCartao) {
      console.log("Informações do cartão válidas. Processando pagamento...");
      // Aqui você pode prosseguir com a lógica de pagamento
    } else {
      console.log("Por favor, preencha todos os campos do cartão.");
    }
  } else if (metodoPagamentoSelecionado === 'boleto') {
    // Lógica para pagamento via boleto bancário
  }
});