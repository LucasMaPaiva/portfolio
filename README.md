<div align="center">

# ⬛ Architect.Noir — Portfolio

**Portfólio pessoal de Lucas Paiva**
Desenvolvedor Full Stack especializado em backend com Laravel.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com)
[![Nginx](https://img.shields.io/badge/Nginx-stable-009639?style=flat-square&logo=nginx&logoColor=white)](https://nginx.org)

</div>

---

## ✨ Sobre

Site de portfólio pessoal construído com React + TypeScript, servido com Nginx em container Docker prontos para produção. O design segue uma estética dark premium com accent verde-esmeralda (`#5DDDA1`).

**Seções:**
- **Hero** — apresentação com CTAs
- **About** — trajetória e stack de foco
- **Stack** — grade de tecnologias
- **Projects** — casos de sucesso em bento grid
- **Diferenciais** — proposta de valor
- **Contact** — email e redes sociais

---

## 🗂️ Estrutura

```
lucaspaiva/
├── docker-compose.yml          # Compose base (local)
├── docker-compose.prod.yml     # Overlay de produção (NPM)
├── .env.example                # Variáveis de ambiente
├── .dockerignore
│
├── .docker/
│   ├── Dockerfile              # Multi-stage build: Node 20 → Nginx Alpine
│   └── nginx.conf              # SPA routing + gzip + cache headers
│
└── src/
    ├── App.tsx
    ├── index.css
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Stack.tsx
        ├── Projects.tsx
        ├── Diferenciais.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

---

## 🚀 Desenvolvimento Local

### Pré-requisitos
- Node.js 20+
- npm

### Rodar com Node

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:5173)
npm run dev

# Build de produção
npm run build
```

### Rodar com Docker (local)

```bash
# 1. Copiar variáveis de ambiente
cp .env.example .env

# 2. Subir o container (http://localhost:3000)
docker compose up -d

# Ver logs
docker compose logs -f

# Parar
docker compose down
```

---

## 🌐 Deploy em Produção

O projeto é servido por **Nginx** dentro de um container Docker, e em produção se conecta à rede externa do **Nginx Proxy Manager**.

### 1. Descobrir o network do NPM no servidor

```bash
docker network ls | grep npm
# ou
docker inspect npm | grep -A5 Networks
```

### 2. Configurar o `.env` no servidor

```bash
cp .env.example .env
```

```env
PROXY_NETWORK_NAME=npm_default   # nome do network do seu NPM
```

### 3. Subir com o overlay de produção

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```

> Em produção, **nenhuma porta é exposta diretamente**. O NPM é o único ponto de entrada, lidando com HTTPS e certificados SSL.

### 4. Configurar no Nginx Proxy Manager

No painel do NPM, crie um **Proxy Host**:

| Campo | Valor |
|---|---|
| Domain | `seudominio.com` |
| Forward Hostname | `lucaspaiva-portfolio` |
| Forward Port | `80` |
| SSL | Let's Encrypt ✅ |

---

## ⚙️ Variáveis de Ambiente

| Variável | Padrão | Descrição |
|---|---|---|
| `APP_PORT` | `3000` | Porta local exposta (apenas local) |
| `PROXY_NETWORK_NAME` | `npm_default` | Nome do network externo do NPM (apenas prod) |

---

## 🏗️ Build Docker — Como funciona

O `Dockerfile` usa um **multi-stage build** para manter a imagem final enxuta:

```
Stage 1 — builder (node:20-alpine)
  └── npm ci
  └── npm run build  →  /app/dist

Stage 2 — serve (nginx:stable-alpine)
  └── copia /app/dist
  └── aplica nginx.conf customizado
  └── ~25MB de imagem final
```

---

<div align="center">

Feito por **Lucas Paiva** · [LinkedIn](#) · [GitHub](#)

</div>
