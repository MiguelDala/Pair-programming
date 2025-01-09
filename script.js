// Definição dos temas com cores específicas
const themes = [
    {
        name: 'Tema Escuro',
        background: 'rgba(26, 26, 26, 0.95)',
        primary: '#3498db',
        secondary: 'rgba(52, 73, 94, 0.9)',
        text: '#ffffff',
        highlight: '#2980b9'
    },
    {
        name: 'Tema Verde',
        background: 'rgba(0, 30, 0, 0.95)',
        primary: '#2ecc71',
        secondary: 'rgba(24, 106, 59, 0.9)',
        text: '#e8f6e8',
        highlight: '#27ae60'
    },
    {
        name: 'Tema Roxo',
        background: 'rgba(44, 20, 60, 0.95)',
        primary: '#9b59b6',
        secondary: 'rgba(86, 41, 114, 0.9)',
        text: '#f5eeff',
        highlight: '#8e44ad'
    },
    {
        name: 'Tema Vermelho',
        background: 'rgba(30, 0, 0, 0.95)',
        primary: '#e74c3c',
        secondary: 'rgba(120, 40, 31, 0.9)',
        text: '#ffe8e8',
        highlight: '#c0392b'
    }
];

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    let currentThemeIndex = 0;
    const themeButton = document.getElementById('change-theme');

    // Verifica se o botão existe
    if (!themeButton) {
        console.error('Botão de tema não encontrado!');
        return;
    }

    // Adiciona o evento de clique
    themeButton.addEventListener('click', function() {
        // Avança para o próximo tema
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];
        
        // Aplica o novo tema
        document.documentElement.style.setProperty('--background-color', newTheme.background);
        document.documentElement.style.setProperty('--primary-color', newTheme.primary);
        document.documentElement.style.setProperty('--secondary-color', newTheme.secondary);
        document.documentElement.style.setProperty('--text-color', newTheme.text);
        document.documentElement.style.setProperty('--highlight-color', newTheme.highlight);

        // Mantém o ícone da lua
        themeButton.textContent = '🌙';

        console.log('Tema alterado para:', newTheme.name); // Para debug
    });
});

// Função para mostrar notificação do tema
function showThemeNotification(themeName) {
    // Remove notificação anterior se existir
    const existingNotification = document.querySelector('.theme-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Cria nova notificação
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.textContent = `Tema: ${themeName}`;
    document.body.appendChild(notification);

    // Remove a notificação após 2 segundos
    setTimeout(() => {
        notification.remove();
    }, 2000);
}
