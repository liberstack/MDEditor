// ui.js — render live + divisor arrastável (resize entre edição e preview)

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const divider = document.getElementById("divider");
const editorPane = document.getElementById("editorPane");
const previewPane = document.getElementById("previewPane");
const workspace = document.getElementById("workspace");

const DEFAULT_MD = `# Bem-vindo ao MD Editor

Escreva na esquerda, veja o preview na direita.

- Arraste a barra do meio pra redimensionar
- Use os botões acima pra importar/exportar

\`\`\`js
console.log("vibe coding ativado");
\`\`\`
`;

function renderPreview() {
  preview.innerHTML = marked.parse(editor.value);
}

editor.addEventListener("input", renderPreview);

editor.value = DEFAULT_MD;
renderPreview();

// --- Divisor arrastável ---
let dragging = false;

divider.addEventListener("mousedown", () => {
  dragging = true;
  divider.classList.add("dragging");
  document.body.style.userSelect = "none";
});

window.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  const rect = workspace.getBoundingClientRect();
  let leftPct = ((e.clientX - rect.left) / rect.width) * 100;

  // limites pra não sumir com nenhum painel
  leftPct = Math.min(Math.max(leftPct, 15), 85);

  editorPane.style.flex = `0 0 ${leftPct}%`;
  previewPane.style.flex = `1 1 ${100 - leftPct}%`;
});

window.addEventListener("mouseup", () => {
  if (!dragging) return;
  dragging = false;
  divider.classList.remove("dragging");
  document.body.style.userSelect = "";
});

// touch support (mobile drag)
divider.addEventListener(
  "touchstart",
  () => {
    dragging = true;
  },
  { passive: true },
);
window.addEventListener(
  "touchmove",
  (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const rect = workspace.getBoundingClientRect();
    let leftPct = ((touch.clientX - rect.left) / rect.width) * 100;
    leftPct = Math.min(Math.max(leftPct, 15), 85);
    editorPane.style.flex = `0 0 ${leftPct}%`;
    previewPane.style.flex = `1 1 ${100 - leftPct}%`;
  },
  { passive: true },
);
window.addEventListener("touchend", () => {
  dragging = false;
});
