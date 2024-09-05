//TODO Agora Irei começar a parte de interação com o usuario com o TypeScript, depois pretendo fazer o Bundle do Projeto.

//TODO Antes de fazer o plano acima, Fazer a interação, no caso com o evento de Click



// Selecionando elementos
const panelElements: NodeListOf<Element> = document.querySelectorAll('.panel');


// Função para remover a classe ativa de todos os painéis
const removeActiveClass = (): void => {
    panelElements.forEach((panel: Element) => {
        panel.classList.remove('div-Active');
    });
};

// Função para adicionar a classe ativa a um painel
const setActivePanel = (panel: Element): void => {
    removeActiveClass();
    panel.classList.add('div-Active');
};

// Adicionando event listeners
panelElements.forEach((panel: Element) => {
    panel.addEventListener('click', () => setActivePanel(panel));
});

