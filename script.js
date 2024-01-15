function selectOption(option) {
    // Remove a classe 'selected' de todos os links
    const links = document.querySelectorAll('#menu a');
    links.forEach(link => link.classList.remove('selected'));

    // Adiciona a classe 'selected' à opção clicada
    const optionSelected = document.querySelector(`#menu a[href="#${option}"]`);
    optionSelected.classList.add('selected');
}

function start(){
    const firstOption = document.querySelector(`#menu a[href="#home"]`);
    firstOption.classList.add('selected');
}