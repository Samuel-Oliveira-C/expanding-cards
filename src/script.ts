//TODO Agora Irei começar a parte de interação com o usuario com o TypeScript, depois pretendo fazer o Bundle do Projeto.

//TODO Antes de fazer o plano acima, Fazer a interação, no caso com o evento de Click

// Definindo tipos
type PanelElement = HTMLElement;

// Selecionando elementos
const panelElements: NodeListOf<PanelElement> = document.querySelectorAll('.panel');
const initialActivePanel: PanelElement | null = document.querySelector('.div-Active');

// Função para remover a classe ativa de todos os painéis
const removeActiveClass = (): void => {
    panelElements.forEach((panel: PanelElement) => {
        panel.classList.remove('div-Active');
    });
};

// Função para adicionar a classe ativa a um painel
const setActivePanel = (panel: PanelElement): void => {
    removeActiveClass();
    panel.classList.add('div-Active');
};

// Adicionando event listeners
panelElements.forEach((panel: PanelElement) => {
    panel.addEventListener('click', () => setActivePanel(panel));
});

// Inicialização (opcional)
if (initialActivePanel) {
    setActivePanel(initialActivePanel);
}

