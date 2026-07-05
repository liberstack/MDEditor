# Deploy

Esse projeto é 100% estático — só HTML, CSS e JS. Isso significa que não tem build, não tem `npm install`, não tem servidor pra configurar. Qualquer serviço de hospedagem estática serve.

Abaixo, os dois caminhos mais simples: **GitHub Pages** e **Cloudflare Pages**.

---

## Opção 1: GitHub Pages

### 1. Suba os arquivos pro GitHub

Se ainda não tem um repositório:

```bash
git init
git add .
git commit -m "primeiro commit do md editor"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

### 2. Ative o GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
3. Clique em **Save**.

### 3. Acesse

Depois de alguns minutos, o site estará disponível em:

```
https://SEU_USUARIO.github.io/NOME_DO_REPO/
```

> Toda vez que você der `git push` pra branch `main`, o site atualiza sozinho.

---

## Opção 2: Cloudflare Pages

### 1. Suba o projeto pro GitHub (mesmo passo da opção 1)

### 2. Conecte no Cloudflare Pages

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com/) e faça login.
2. Clique em **Create a project → Connect to Git**.
3. Selecione o repositório do editor.

### 3. Configure o build

Como o projeto não tem build step, configure assim:

| Campo | Valor |
|---|---|
| Framework preset | `None` |
| Build command | *(deixe em branco)* |
| Build output directory | `/` |

### 4. Deploy

Clique em **Save and Deploy**. Em segundos, o Cloudflare te dá uma URL tipo:

```
https://nome-do-repo.pages.dev
```

> Assim como no GitHub Pages, todo `git push` gera um novo deploy automático.

---

## Qual escolher?

- **GitHub Pages**: mais simples de configurar, direto do próprio repositório.
- **Cloudflare Pages**: build mais rápido, CDN global melhor, e mais fácil de plugar um domínio próprio depois.

Nos dois casos, como o projeto não depende de nenhuma variável de ambiente nem processo de build, o deploy é praticamente "subiu, funcionou".