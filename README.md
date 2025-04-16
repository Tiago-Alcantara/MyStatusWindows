# 🏠 Projeto: Monitoramento de Temperatura e Controle de Janela com Arduino + Next.js

Este repositório une hardware e software em um único projeto de automação residencial. Ele permite monitorar a temperatura e o clima, controlar automaticamente a janela e visualizar tudo isso através de uma página web moderna, hospedada na Vercel ou executada via Docker.

---

## 📁 Estrutura do Repositório

```
/
├── arduino/           # Código-fonte do Arduino R4 WiFi
│   └── monitoramento_janela.ino
│
├── web/               # Projeto Next.js com Tailwind e Docker
│   ├── pages/
│   ├── public/
│   ├── styles/
│   ├── Dockerfile
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
```

---

## 🔧 Funcionalidades

### Arduino (pasta `arduino/`):
- Conecta ao Wi-Fi (inclusive via hotspot de celular)
- Lê temperatura (DHT11)
- Detecta chuva (simulado)
- Controla janela automática
- Envia JSON com status para o backend via HTTPS

### Web (pasta `web/`):
- API Routes para `/api/status` e `/api/atualizar`
- Exibe temperatura, status da chuva e janela
- Interface com Tailwind CSS responsivo
- Pode ser executada localmente com Docker

---

## 🚀 Como usar com Docker

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seuusuario/nome-do-repo.git
   cd nome-do-repo/web
   ```

2. **Build da imagem Docker**
   ```bash
   docker build -t status-janela .
   ```

3. **Executar o container**
   ```bash
   docker run -p 3000:3000 status-janela
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

---

## 🎨 Tailwind CSS

A interface web usa Tailwind para o estilo moderno e responsivo. Os principais arquivos são:

- `styles/globals.css`
- `pages/_app.tsx`
- `tailwind.config.js`
- `postcss.config.js`

---

## 🧪 Exemplo de JSON enviado pelo Arduino

```json
{
  "temperatura": 24.5,
  "chovendo": true,
  "janela": "fechada",
  "ultima_fechada": "2025-04-15 17:00"
}
```

---

## 📄 Licença

Distribuído sob licença MIT. Sinta-se livre para usar, modificar e compartilhar. 😄
