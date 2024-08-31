//TODO Agora Irei começar a parte de interação com o usuario com o TypeScript, depois pretendo fazer o Bundle do Projeto.
// Selecionando elementos
var panelElements = document.querySelectorAll('.panel');
var initialActivePanel = document.querySelector('.div-Active');
// Função para remover a classe ativa de todos os painéis
var removeActiveClass = function () {
    panelElements.forEach(function (panel) {
        panel.classList.remove('div-Active');
    });
};
// Função para adicionar a classe ativa a um painel
var setActivePanel = function (panel) {
    removeActiveClass();
    panel.classList.add('div-Active');
};
// Adicionando event listeners
panelElements.forEach(function (panel) {
    panel.addEventListener('click', function () { return setActivePanel(panel); });
});
// Inicialização (opcional)
if (initialActivePanel) {
    setActivePanel(initialActivePanel);
}
