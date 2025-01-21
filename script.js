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
    const toggleButton = document.getElementById('toggle-section');
    const computerHistory = document.getElementById('computer-history');
    const gitIntro = document.getElementById('git-intro');
    
    // Criar seção de imagens históricas
    const imageSection = document.createElement('section');
    imageSection.id = 'historical-images';
    imageSection.style.display = 'none';
    
    // Array com as informações das imagens
    const historicalImages = [
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY198fqWOoqcRq822RQ0TSsqcwkPWj-TgECw&s",
            title: "Linus Torvalds",
            description: "Criador do Linux e Git, revolucionou o mundo do software livre"
        },
        {
            url: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/26776_1798DEE935286D54.jpg?w=1024",
            title: "ENIAC",
            description: "Primeiro Computador Eletrônico (1946), ocupava uma sala inteira"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbS5s30nQfyo5qD6P6qavpH5rTiKuOYysrg&s",
            title: "Cartões Perfurados",
            description: "Método de programação usado nas décadas de 1960-70"
        },
        {
            url: "https://preview.redd.it/wxxklocvh2q81.png?auto=webp&s=3849131783bf9e4ab101e30ab0aab7ab6c7c5f2e",
            title: "IBM 704",
            description: "Um dos primeiros computadores comerciais (1954)"
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Altair_8800_Computer.jpg",
            title: "Altair 8800",
            description: "Um dos primeiros computadores pessoais (1974)"
        },
        {
            url: "https://img.odcdn.com.br/wp-content/uploads/2021/04/ap1.jpeg",
            title: "Apple I",
            description: "Primeiro computador da Apple, criado por Steve Jobs e Wozniak (1976)"
        }
    ];


    // Criar os cards de imagens
    const imageGrid = document.createElement('div');
    imageGrid.className = 'image-grid';
    
    historicalImages.forEach(img => {
        const card = `
            <div class="image-card">
        <img src="${img.url}" alt="${img.title}"='index.html'">
                <div class="card-content">
                    <h3>${img.title}</h3>
                    <p>${img.description}</p>
                </div>
            </div>
        `;
        imageGrid.innerHTML += card;
    });

    imageSection.appendChild(imageGrid);
    computerHistory.appendChild(imageSection);

    toggleButton.addEventListener('click', function() {
        computerHistory.classList.toggle('hidden');
        gitIntro.classList.toggle('hidden');
        
        // Atualiza o texto do botão
        if (computerHistory.classList.contains('hidden')) {
            toggleButton.textContent = 'Ver História da Computação';
        } else {
            toggleButton.textContent = 'Ver Sobre Git';
        }
    });

    const computingHistoryContent = `
        <h2>História da Computação</h2>
        <div class="history-timeline">
            <div class="timeline-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Eniac.jpg/300px-Eniac.jpg" alt="ENIAC">
                <h3>1946 - ENIAC</h3>
                <p>Primeiro computador eletrônico de propósito geral</p>
            </div>
            <div class="timeline-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Intel_4004.jpg/220px-Intel_4004.jpg" alt="Intel 4004">
                <h3>1971 - Intel 4004</h3>
                <p>Primeiro microprocessador comercial</p>
            </div>
            <div class="timeline-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IBM_PC_5150.jpg/300px-IBM_PC_5150.jpg" alt="IBM PC">
                <h3>1981 - IBM PC</h3>
                <p>Lançamento do PC que revolucionou a computação pessoal</p>
            </div>
            <div class="timeline-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Crystal_Project_computer.png/220px-Crystal_Project_computer.png" alt="Internet">
                <h3>1991 - World Wide Web</h3>
                <p>Tim Berners-Lee cria a World Wide Web</p>
            </div>
        </div>
    `;

    let showingGit = true;

    toggleButton.addEventListener('click', function() {
        if (showingGit) {
            gitIntro.innerHTML = computingHistoryContent;
            toggleButton.textContent = "Ver Git";
        } else {
            location.reload(); // Recarrega a página para mostrar o conteúdo original do Git
        }
        showingGit = !showingGit;
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