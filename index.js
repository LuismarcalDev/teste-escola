function publicar() {
    // Pegando os valores dos inputs
    const nomeVaga = document.getElementById('nome-vaga-js').value;
    const localVaga = document.getElementById('local-vaga-js').value;
    const cargaHorariaVaga = document.getElementById('carga-vaga-js').value;
    const salarioVaga = document.getElementById('salario-vaga-js').value;
    const descricaoVaga = document.getElementById('descricao-vaga-js').value;

    // Salvando os dados no localStorage
    localStorage.setItem('nomeVaga', nomeVaga);
    localStorage.setItem('localVaga', localVaga);
    localStorage.setItem('cargaHorariaVaga', cargaHorariaVaga);
    localStorage.setItem('salarioVaga', salarioVaga);
    localStorage.setItem('descricaoVaga', descricaoVaga);

    // Redirecionando para a segunda página
    
   
}

window.onload = function() {
    // Recuperando os dados do localStorage
    const nomeVaga = localStorage.getItem('nomeVaga');
    const localVaga = localStorage.getItem('localVaga');
    const cargaHorariaVaga = localStorage.getItem('cargaHorariaVaga');
    const salarioVaga = localStorage.getItem('salarioVaga');
    const descricaoVaga = localStorage.getItem('descricaoVaga');

    // Atualizando o conteúdo dos elementos da segunda página
    document.getElementById('nome-vaga').innerText = nomeVaga;
    document.getElementById('local-vaga').innerText = localVaga;
    document.getElementById('Carga-Horaria-vaga').innerText = cargaHorariaVaga;
    document.getElementById('Salario-vaga').innerText = salarioVaga;
    document.getElementById('Descrição-vaga').innerText = descricaoVaga;
}
