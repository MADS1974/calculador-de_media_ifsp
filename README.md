# 🧮 Calculador de Média - IFSP

Este é um aplicativo desenvolvido em **React Native** utilizando o framework **Expo** para o cálculo de médias estudantis. O projeto foi projetado com uma interface limpa, processamento de dados robusto e um sistema de validação de formulário com feedback visual dinâmico em tempo real.

---

## 🚀 Funcionalidades Principais

- **Entrada de Dados**: Campos estruturados para Nome, E-mail e três Notas, utilizando teclado numérico apropriado.
- **Validação Inteligente**:
  - Detecção de campos vazios ou entradas inválidas (letras no lugar de notas).
  - Alertas visuais inline (direto no campo) que desaparecem automaticamente assim que o usuário volta a digitar.
  - Tratamento de dados convertendo vírgulas para pontos no cálculo (ex: 7,5 para 7.5).
- **Cálculo de Média Dinâmico**: Processamento instantâneo da média aritmética simples com formatação de duas casas decimais.
- **Gestão de Estado**: Botão dedicado para limpar todos os inputs, resetar os alertas de erro, fechar o teclado virtual e esconder a área de resultados.

---

## 🎨 Identidade Visual e UI/UX

O design foi estruturado utilizando `StyleSheet` e sistema **Flexbox** para garantir total responsividade entre diferentes tamanhos de telas e plataformas:

- **Organização de Layout**: Campos de texto longos para dados pessoais e campos distribuídos lado a lado (em linha) para as notas e botões de ação.
- **Feedback de Erro**: Bordas dos inputs e textos de aviso renderizados em Vermelho Alerta (`#D32F2F`) durante a validação.
- **Área de Resultados**: Renderização condicional (só aparece após o cálculo bem-sucedido) destacada com um fundo cinza leve (`#f0f0f0`).

---

## 🛠️ Tecnologias e Bibliotecas

- **Framework**: [React Native](https://reactnative.dev/)
- **Plataforma/Build**: [Expo](https://expo.dev/) (Expo Router)
- **Linguagem**: JavaScript / TypeScript (TSX)

---

## ⚙️ Configurações Técnicas

### Estrutura de Cores Principais (Hex)

| Elemento                           | Hexadecimal | Cor |
| :--------------------------------- | :---------- | :-- |
| Botão Calcular (Azul)              | `#2196F3`   | 🔵  |
| Botão Reiniciar / Erros (Vermelho) | `#D32F2F`   | 🔴  |
| Fundo Resultado (Cinza)            | `#f0f0f0`   | ⚪  |

### Instalação e Execução

Para rodar este projeto localmente, não é necessário o `node_modules` no download. Basta ter o Node.js instalado e rodar os seguintes comandos no terminal:

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Iniciar o servidor de desenvolvimento
npx expo start

📱 Demonstração em Vídeo
Confira o aplicativo em funcionamento:

🎥 CLIQUE AQUI PARA VER O VÍDEO DO APP

📚 Créditos
Projeto acadêmico desenvolvido para a disciplina de Pós-Graduação,
ministrada pelo professor Carlão (IFSP).

🙋‍♂️
🔗 Conecte-se comigo

LinkedIn - Márcio Adriano
```
