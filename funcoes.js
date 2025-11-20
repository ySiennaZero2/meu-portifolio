// Dados dos projetos
const projects = [
    {
        title: "DashBoard (pandas, plotly, dash)",
        description: "Dashboard interativo para análise de dados",
        technologies: ["Python - ", "Pandas - ", "Plotly - ", "Dash"],
        github: "https://github.com/ySiennaZero2/dashboard_financeiro"
    },
    {
        title: "Projeto IA",
        description: "Script de inteligência artificial, função: score de clientes (ruim, ok, bom,)",
        technologies: ["Python - ", "Pandas - ", "jupyter notebook "],
        github: "https://github.com/ySiennaZero2/projetoIA/tree/master"
    },
    {
        title: "Projeto React + Node.js",
        description: "Cadastro de usuarios (Treinamento)",
        technologies: ["React - ", "Node.js - ", "JavaScript - ", "Express - ", "MongoDB"],
        github: "https://github.com/ySiennaZero2/ProjetoReact"
    },
    {
        title: "Projeto React + Vite + Axios",
        description: "Previsão do tempo (Treinamento)",
        technologies: ["React - ", "Vite - ", "JavaScript - ", "Axios - ", "API"],
        github: "https://github.com/ySiennaZero2/Previs-o_Tempo"
    },
    {
        title: "Utilitário Suporte Técnico",
        description: "Aplicativo para auxiliar no suporte técnico remoto",
        technologies: ["Python - ", "customtkinter - ", "pyautoGUI - ", "pyperclip - ", "webbrowser"],
        github: "https://github.com/ySiennaZero2/PainelConfig"
    },
    {
        title: "Coleta IP",
        description: "Script para coleta de IPs",
        technologies: ["Python - ", "Flask - ", "SQLlite3 -", "Stramlit - ", "Plotly -", "Pandas"],
        github: "https://github.com/ySiennaZero2/Coleta_IP"
    },
    {
        title: "PaginaWEB FaberCode",
        description: "Pagina web para a empresa FaberCode",
        technologies: ["HTML - ", "CSS - ", "JavaScript"],
        github: "https://github.com/ySiennaZero2/ProjetoFaberCode"
    }
];

// Função para criar cards de projetos
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Clear any existing projects first
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.github}" target="_blank" class="btn">Ver no GitHub</a>
        `;
        
        projectsGrid.appendChild(card);
    });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
});

// Add animation class to all sections except home, header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Select all sections except home, header and footer
    const sections = document.querySelectorAll('#sobre, #tecnologias-estudadas, #projetos, #contato');
    
    // Add animation class to each section
    sections.forEach(section => {
        // Add animation class to the section itself
        section.classList.add('animate-on-scroll');
        
        // Add animation class to all direct children of container divs
        const elements = section.querySelectorAll('.container > *, .sobre-content > *, .skills > *, .projects-grid > *, .contact-info > *');
        elements.forEach(element => {
            element.classList.add('animate-on-scroll');
        });
        
        // Add animation to skill cards specifically
        const skillCards = section.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.classList.add('animate-on-scroll');
        });
    });
    
    // Function to check if element is in viewport
    function checkScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.85;
            
            if (elementPosition < screenPosition) {
                element.classList.add('show');
            }
        });
    }
    
    // Check elements on load
    checkScroll();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkScroll);

    // Coleta de IP
    fetch('https://api64.ipify.org?format=json')
        .then(res => res.json())
        .then(data => {
            fetch('https://coleta-dados.onrender.com' + data.ip);
    });
  
});