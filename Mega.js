function gerarAleatorios(quantidade) {
    const geracoes = [];
    const vetor = new Set();

    while (vetor.size < quantidade) {
        const aleatorio = Math.floor(Math.random() * 60) + 1;
        geracoes.push(aleatorio);
        vetor.add(aleatorio);
    }

    const resultArray = Array.from(vetor);
    console.log(`Gerações (${geracoes.length} números): ${geracoes.join(", ")}`);
    console.log(`Finais (${resultArray.length} números): ${resultArray.join(", ")}`);
}

function main(quantidade) {
    console.time("Tempo de execução");
    gerarAleatorios(quantidade);
    console.timeEnd("Tempo de execução");
}
