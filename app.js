document.addEventListener("DOMContentLoaded", function() {
    // Definição dos textos para os idiomas suportados
    const translations = {
        en: {
            title: "Secret Santa",
            sectionTitle: "Enter your friends' names",
            inputPlaceholder: "Enter a name",
            addButton: "Add",
            drawButton: "Draw friend",
            alertMinNames: "Please enter at least two names!",
            resultTitle: "Your Secret Santa assignments:",
            emptyInputAlert: "Please enter a name!"
        },
        pt: {
            title: "Amigo Secreto",
            sectionTitle: "Digite o nome dos seus amigos",
            inputPlaceholder: "Digite um nome",
            addButton: "Adicionar",
            drawButton: "Sortear amigo",
            alertMinNames: "Por favor, insira pelo menos dois nomes!",
            resultTitle: "Seus sorteios de Amigo Secreto:",
            emptyInputAlert: "Por favor, insira um nome!"
        },
        fr: {
            title: "Père Noël Secret",
            sectionTitle: "Entrez les noms de vos amis",
            inputPlaceholder: "Entrez un nom",
            addButton: "Ajouter",
            drawButton: "Tirer au sort",
            alertMinNames: "Veuillez entrer au moins deux noms!",
            resultTitle: "Vos attributions de Père Noël Secret:",
            emptyInputAlert: "Veuillez entrer un nom!"
        },
        es: {
            title: "Amigo Secreto",
            sectionTitle: "Ingrese los nombres de sus amigos",
            inputPlaceholder: "Ingrese un nombre",
            addButton: "Añadir",
            drawButton: "Sortear amigo",
            alertMinNames: "¡Por favor, ingrese al menos dos nombres!",
            resultTitle: "Sus asignaciones de Amigo Secreto:",
            emptyInputAlert: "¡Por favor, ingrese un nombre!"
        }
    };

    // Definir idioma padrão
    let currentLang = 'pt';

    // Criar seletor de idioma se não existir
    if (!document.getElementById("language-selector")) {
        const langSelector = document.createElement("select");
        langSelector.id = "language-selector";
        
        const languages = {
            'en': 'English',
            'pt': 'Português',
            'fr': 'Français',
            'es': 'Español'
        };
        
        for (const [code, name] of Object.entries(languages)) {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = name;
            option.selected = code === currentLang;
            langSelector.appendChild(option);
        }
        
        document.querySelector('.header-banner').appendChild(langSelector);
    }

    // Função para mudar o idioma
    document.getElementById("language-selector").addEventListener("change", function() {
        currentLang = this.value;
        updateText();
    });

    // Atualizar textos com base no idioma selecionado
    function updateText() {
        document.getElementById("main-title").innerText = translations[currentLang].title;
        document.getElementById("section-title").innerText = translations[currentLang].sectionTitle;
        document.getElementById("amigo").placeholder = translations[currentLang].inputPlaceholder;
        document.querySelector(".button-add").innerText = translations[currentLang].addButton;
        document.querySelector(".button-draw").innerText = translations[currentLang].drawButton;
    }

    // Lista de participantes
    let participants = [];

    // Função para adicionar amigo
    window.adicionarAmigo = function() {
        const nameInput = document.getElementById("amigo");
        const name = nameInput.value.trim();
        
        if (name) {
            participants.push(name);
            
            // Adicionar à lista visual
            const li = document.createElement("li");
            li.textContent = name;
            document.getElementById("listaAmigos").appendChild(li);
            
            // Limpar o campo
            nameInput.value = "";
            nameInput.focus();
        } else {
            alert(translations[currentLang].emptyInputAlert);
        }
    };

    // Função para sortear amigo secreto
    window.sortearAmigo = function() {
        if (participants.length < 2) {
            alert(translations[currentLang].alertMinNames);
            return;
        }
        
        // Embaralhar nomes
        let receivers = [...participants];
        let givers = [...participants];
        let assignments = [];
        
        // Embaralhar até que ninguém receba a si mesmo
        let validDraw = false;
        while (!validDraw) {
            // Embaralhar os receptores
            for (let i = receivers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [receivers[i], receivers[j]] = [receivers[j], receivers[i]];
            }
            
            // Verificar se ninguém recebeu a si mesmo
            validDraw = true;
            for (let i = 0; i < participants.length; i++) {
                if (givers[i] === receivers[i]) {
                    validDraw = false;
                    break;
                }
            }
        }
        
        // Criar as atribuições
        for (let i = 0; i < participants.length; i++) {
            assignments.push(`${givers[i]} → ${receivers[i]}`);
        }
        
        // Exibir resultados
        const resultList = document.getElementById("resultado");
        resultList.innerHTML = `<h3>${translations[currentLang].resultTitle}</h3>`;
        
        assignments.forEach(assignment => {
            const li = document.createElement("li");
            li.textContent = assignment;
            resultList.appendChild(li);
        });
    };

    // Suporte para adicionar amigo com Enter
    document.getElementById("amigo").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            window.adicionarAmigo();
        }
    });

    // Inicializar textos na língua padrão
    updateText();
});