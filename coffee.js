// coffee.js — modal de apoio (Pix/PicPay) + copiar e-mail

const btnSupport = document.getElementById("btnSupport");
const supportModal = document.getElementById("supportModal");
const modalClose = document.getElementById("modalClose");
const btnCopyEmail = document.getElementById("btnCopyEmail");
const pixEmail = document.getElementById("pixEmail");

function openModal() {
  supportModal.hidden = false;
}

function closeModal() {
  supportModal.hidden = true;
}

btnSupport.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

// fecha clicando fora da caixa (no overlay)
supportModal.addEventListener("click", (e) => {
  if (e.target === supportModal) closeModal();
});

// fecha com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !supportModal.hidden) closeModal();
});

// copiar e-mail
btnCopyEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pixEmail.textContent.trim());
    const original = btnCopyEmail.textContent;
    btnCopyEmail.textContent = "Copiado!";
    btnCopyEmail.disabled = true;
    setTimeout(() => {
      btnCopyEmail.textContent = original;
      btnCopyEmail.disabled = false;
    }, 1800);
  } catch (err) {
    console.error("Erro ao copiar:", err);
  }
});
