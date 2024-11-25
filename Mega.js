function gerarAleatorios(quantidade) {
    const geracoes = [];
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);

    while (geracoes.length < quantidade) {
        const indiceAleatorio = Math.floor(Math.random() * numeros.length);
        const aleatorio = numeros.splice(indiceAleatorio, 1)[0];
        geracoes.push(aleatorio);
    }

    console.log(`Gerações (${geracoes.length} números): ${geracoes.join(", ")}`);
    console.log(`Finais (${geracoes.length} números): ${geracoes.join(", ")}`);
}
