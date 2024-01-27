const textos = {
    home: {
        titulo: 'Home',
        labelChavePix: 'Chave Pix',
        placeHolderChavePix: 'Selecione uma Chave Pix',
        labelValor: 'Valor',
        placeHolderValor: 'Digite um valor (R$)',
        labelDividirConta: 'Dividir conta?',
        placeHolderDividirValor: 'Mín. 2',
        botaoGerarCobranca: 'Gerar Cobrança'
    },
    cobrancaGerada: {
        titulo: 'Cobrança Gerada',
        textoCobrancaGerada: 'Sua cobrança foi gerada com sucesso!',
        textoInstrucoes: 'Agora você pode compartilhá-la a partir do QR code ou do código copia e cola.',
        botaoCopiarCodigo: 'Copiar Código',
        rodapeFinalizar: 'Finalizar cobrança?',
        linkVoltar: 'Voltar'
    },
    chaveiro: {
        titulo: 'Chaveiro',
        textoChaveiroVazio: 'Seu chaveiro está vazio...',
        labelDeletarChave: 'Deletar chave?',
        botaoCancelar: 'Cancelar',
        botaoDeletar: 'Deletar'
    },
    adicionarChave: {
        titulo: 'Adicionar Chave',
        textoAdicionarChave: 'Vamos adicionar uma nova chave Pix?',
        textoInstrucoes: 'Digite o nome do proprietário da chave e a chave Pix de acordo com o tipo selecionado anteriormente.',
        labelNome: 'Nome Completo',
        placeHolderNome: 'Digite o nome do proprietário',
        labelChavePix: 'ChavePix',
        placeHolderChavePix: 'Digite a chave Pix',
        botaoCadastrar: 'Cadastrar',
        rodapeAdicionarChave: 'Se enganou?',
        rodapeRegistrarChave: 'Tipo de chave incorreto?',
        linkVoltar: 'Voltar'
    },
    tipos: [
        {tipo: 'CPF'},
        {tipo: 'Email'},
        {tipo: 'Telefone'},
        {tipo: 'Aleatória'}
    ]
}

export default textos