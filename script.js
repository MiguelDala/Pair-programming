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
    const toggleButton = document.getElementById("toggle-section");
    const mainContent = document.querySelector("main");
    const gitIntro = document.getElementById("git-intro");
    
    // Criar seção de imagens históricas
    const imageSection = document.createElement('section');
    imageSection.id = 'historical-images';
    imageSection.style.display = 'none';
    
    // Array com as informações das imagens
    const historicalImages = [
        {
            url: "https://cdn.britannica.com/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg?w=400&h=300&c=crop",
            title: "Linus Torvalds",
            description: "Criador do Linux e Git, revolucionou o mundo do software livre"
        },
        {
            url: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/26776_1798DEE935286D54.jpg",
            title: "ENIAC",
            description: "Primeiro Computador Eletrônico (1946), ocupava uma sala inteira"
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Used_Punchcard_%285151286161%29.jpg/300px-Used_Punchcard_%285151286161%29.jpg",
            title: "Cartões Perfurados",
            description: "Método de programação usado nas décadas de 1960-70"
        },
        {
            url: "https://time.graphics/uploadedFiles/500/09/50/0950698cce300961a77ef4e19e070d6c.jpg",
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
                <img src="${img.url}" alt="${img.title}" onerror="this.src='https://media.gettyimages.com/id/532505754/photo/linux-designer-linus-torvalds.jpg?s=612x612&w=gi&k=20&c=TEVHSR30QudwdBWWL362qBt6cRgs-zibgwp90hGWi2k='">
                <div class="card-content">
                    <h3>${img.title}</h3>
                    <p>${img.description}</p>
                </div>
            </div>
        `;
        imageGrid.innerHTML += card;
    });

    imageSection.appendChild(imageGrid);
    mainContent.appendChild(imageSection);

    // Função para alternar o conteúdo
    toggleButton.addEventListener("click", function() {
        const allSections = document.querySelectorAll('main section');
        
        if (imageSection.style.display === 'none') {
            // Esconder todo o conteúdo do Git
            allSections.forEach(section => {
                if (section.id !== 'historical-images') {
                    section.style.display = 'none';
                }
            });
            // Mostrar apenas as imagens
            imageSection.style.display = 'block';
            toggleButton.textContent = 'Voltar ao Conteúdo';
        } else {
            // Esconder as imagens
            imageSection.style.display = 'none';
            // Mostrar o conteúdo do Git
            allSections.forEach(section => {
                if (section.id !== 'historical-images') {
                    section.style.display = 'block';
                }
            });
            toggleButton.textContent = 'Ver Imagens Históricas';
        }
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