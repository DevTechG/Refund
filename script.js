// Seleciona os elementos do formulário.
const amount = document.getElementById("amount")

// Captura o evento de input para formatar o valor.
amount.oninput = () => {
    // Obtém o valor atual do input e remove os caracteres não numéricos.
    let value = amount.value.replace(/D/g, "")

    // Transforma o valor em centavos (exemplo: 150/100 = 1.5 que é equivalente a R$ 1,500)
    value = Number(value) / 100

    // Atualiza valor do input.
    amount.value = value
}

function formatCurrencyBRL(value) {
    // Formata o valor no padrão BRL (Real Brasileiro).
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    // Retorna o valor formatado.
    return value
}