class Lancamento {
    // Lancamento 
    constructor(nome = "Genérico", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

// CicloFinanceiro
class CicloFinanceiro {
   
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }
}