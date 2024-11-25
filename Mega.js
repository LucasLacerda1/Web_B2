function gerarAleatorios(quantidade) {
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    const resultado = [];

    for (let i = 0; i < quantidade; i++) {
        const indice = Math.floor(Math.random() * numeros.length);
        resultado.push(...numeros.splice(indice, 1));
    }

    return resultado;
}

