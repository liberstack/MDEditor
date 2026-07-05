# MD Editor

Editor de Markdown online, com preview em tempo real e divisão de tela ajustável entre edição e visualização.

Sem build step, sem framework — HTML, CSS e JavaScript puros (as únicas dependências externas são libs via CDN, explicadas mais abaixo).

## Funcionalidades

- **Edição + Preview lado a lado**, com o preview atualizando em tempo real conforme você digita.
- **Divisor arrastável**: a barra entre os dois painéis pode ser puxada com o mouse (ou o dedo, no celular) pra redistribuir o espaço entre edição e preview do jeito que preferir.
- **Import .md**: carrega um arquivo `.md` do seu computador direto pro editor.
- **Export .md**: baixa o que você escreveu como um arquivo `.md` puro.
- **Export .html**: baixa uma página `.html` standalone, já com o markdown renderizado e estilizado.
- **Export .pdf**: gera um PDF a partir do preview renderizado.

## Como usar

1. Abra o `index.html` no navegador (não precisa de servidor, nem de instalar nada).
2. Escreva markdown no painel da esquerda.
3. Veja o resultado renderizado no painel da direita, em tempo real.
4. Use os botões no topo pra importar ou exportar o conteúdo.

## Estrutura do projeto

```
.
├── index.html     → estrutura da página e toolbar
├── style.css      → layout, cores e estilo do preview
├── ui.js          → renderização live do markdown + lógica do divisor arrastável
└── export.js      → import de .md e exportação para .md / .html / .pdf
```

Cada arquivo tem uma responsabilidade só:

- `ui.js` cuida da **interação da tela** (o que o usuário vê e arrasta).
- `export.js` cuida de **entrada e saída de arquivos** (o que entra e sai do editor).

## Dependências (via CDN)

O projeto não tem `node_modules`, nem `package.json` — as duas únicas bibliotecas externas são carregadas direto por `<script>` no `index.html`:

| Biblioteca | Pra quê serve |
|---|---|
| [marked.js](https://marked.js.org/) | Converte o texto markdown em HTML pro preview |
| [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) | Gera o PDF a partir do HTML renderizado |

Se a internet cair, o editor e o preview continuam funcionando normalmente — só o **Export .pdf** depende do html2pdf carregado via CDN (o export de `.md` e `.html` não dependem de nada externo).

## Tecnologias

- HTML5
- CSS3 (Flexbox)
- JavaScript vanilla (ES6+)

## Licença

Uso livre — adapta, modifica e usa como quiser.