# 🎁 Amigo Secreto / Secret Santa

Um aplicativo web simples e elegante para organizar sorteios de amigo secreto, com suporte para múltiplos idiomas.

## ✨ Características

- **Multilíngue**: Suporte completo para Inglês, Português, Espanhol e Francês
- **Interface Amigável**: Design limpo e intuitivo
- **Sorteio Inteligente**: Algoritmo que garante que ninguém tire o próprio nome
- **Responsivo**: Funciona perfeitamente em dispositivos móveis e desktops
- **Sem Backend**: Aplicação totalmente client-side, sem necessidade de servidor

## 🚀 Começando

### Pré-requisitos

- Um navegador web moderno
- Não é necessário instalar nenhuma dependência adicional

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd amigo-secreto
   ```

3. Abra o arquivo `index.html` em seu navegador favorito ou utilize um servidor local:
   ```bash
   # Usando o Python para criar um servidor local
   python -m http.server 8000
   
   # Ou com o Node.js
   npx serve
   ```

## 🎮 Como Usar

1. Selecione seu idioma preferido no seletor no canto superior direito
2. Digite o nome de um participante na caixa de texto
3. Clique em "Adicionar" ou pressione Enter para incluir o participante na lista
4. Repita os passos 2 e 3 para adicionar todos os participantes (mínimo de 2 pessoas)
5. Clique no botão "Sortear Nomes" para realizar o sorteio
6. Os resultados serão exibidos na tela, mostrando quem tirou quem

## 🔧 Estrutura do Projeto

```
amigo-secreto/
│
├── index.html        # Estrutura HTML principal
├── style.css         # Estilos da aplicação
├── app.js            # Lógica de funcionamento e traduções
│
└── assets/           # Recursos visuais
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilos e responsividade
- **JavaScript**: Lógica de sorteio e tradução
- **Fontes Google**: Inter e Merriweather para tipografia

## 📝 Personalização

Você pode facilmente personalizar:

- **Cores**: Edite as variáveis CSS no topo do arquivo `style.css`
- **Idiomas**: Adicione novos idiomas editando o objeto `translations` no arquivo `app.js`
- **Imagens**: Substitua os arquivos na pasta `assets/` por suas próprias imagens

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- Ícones e imagens: [Nome da Fonte]
- Inspiração: [Nome ou Link]

---

Desenvolvido com ❤️ por [Seu Nome]
