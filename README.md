# Chronos Pomodoro

Aplicativo moderno de gestão de tempo baseado na Técnica Pomodoro, desenvolvido em **React** com **TypeScript**, **Vite** e estilizado com **CSS Modules**.

---

## 📌 Funcionalidades

- **Timer Pomodoro (Home):** Controle de ciclos de foco e descanso com mostrador digital, identificação de tarefa e visualizador de ciclos por pontos de status.
- **Histórico de Ciclos:** Tabela completa com registro de tarefas, duração, data/hora, status (ex: interrompida/concluída) e tipo de ciclo, com opção de limpeza rápida.
- **Configurações:** Personalização dos minutos para as etapas de foco, descanso curto e descanso longo.
- **Página 404 Interativa:** Rota de fallback estilizada para páginas não encontradas com links rápidos de retorno.
- **Tema Escuro Moderno:** Interface estilizada em Dark Theme com gradiente azul/preto, destaque em verde menta (_teal_) e ícones da biblioteca Lucide.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) - Biblioteca front-end
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Vite](https://vitejs.dev/) - Build tool e ambiente de desenvolvimento rápido
- [CSS Modules](https://github.com/css-modules/css-modules) - Escopo local de estilos
- [Lucide React](https://lucide.dev/) - Conjunto de ícones minimalistas

---

## 📁 Estrutura de Pastas

```text
src/
├── assets/             # Ícones, vetores e imagens estáticas
├── components/         # Componentes compartilhados
│   ├── Footer/         # Rodapé padrão do app
│   ├── Heading/        # Cabeçalho com logo e tipografia
│   ├── Layout/         # Casca padrão reaproveitável
│   └── Navigation/     # Barra de navegação centralizada
├── pages/              # Telas da aplicação
│   ├── History/        # Histórico de execuções
│   ├── Home/           # Tela do cronômetro
│   ├── NotFound/       # Página de erro 404
│   └── Settings/       # Configurações de tempo
├── styles/             # Estilização global e tokens
│   ├── global.css      # Reset CSS e base tipográfica (62.5% rem)
│   └── theme.css       # Variáveis de cor, gradientes e raios
├── App.tsx             # Componente raiz da aplicação
└── main.tsx            # Ponto de entrada React DOM
```
