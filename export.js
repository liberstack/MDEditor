// export.js — import .md e export .md / .html / .pdf

const importInput = document.getElementById("importInput");
const btnImport = document.getElementById("btnImport");
const btnExportMd = document.getElementById("btnExportMd");
const btnExportHtml = document.getElementById("btnExportHtml");
const btnExportPdf = document.getElementById("btnExportPdf");

function downloadBlob(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// --- Import .md ---
btnImport.addEventListener("click", () => importInput.click());

importInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    editor.value = reader.result;
    renderPreview();
  };
  reader.readAsText(file);

  importInput.value = ""; // permite reimportar o mesmo arquivo depois
});

// --- Export .md ---
btnExportMd.addEventListener("click", () => {
  downloadBlob(editor.value, "documento.md", "text/markdown");
});

// --- Export .html ---
btnExportHtml.addEventListener("click", () => {
  const fullHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Documento exportado</title>
<style>
  body { font-family: -apple-system, "Segoe UI", Roboto, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #1c1c1f; line-height: 1.6; }
  pre { background: #14151b; color: #e6e6ea; padding: 12px 14px; border-radius: 6px; overflow-x: auto; }
  code { background: #f0f0f3; padding: 2px 5px; border-radius: 4px; font-size: 0.9em; }
  pre code { background: none; padding: 0; }
  blockquote { border-left: 3px solid #6c8cff; margin: 0; padding-left: 14px; color: #55565f; }
  img { max-width: 100%; }
  table { border-collapse: collapse; }
  th, td { border: 1px solid #ddd; padding: 6px 10px; }
</style>
</head>
<body>
${preview.innerHTML}
</body>
</html>`;

  downloadBlob(fullHtml, "documento.html", "text/html");
});

// --- Export .pdf ---
btnExportPdf.addEventListener("click", () => {
  const opt = {
    margin: 12,
    filename: "documento.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(preview).save();
});
