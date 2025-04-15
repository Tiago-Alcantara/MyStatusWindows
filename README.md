# 🏠 Projeto: Monitoramento de Temperatura e Controle de Janela com Arduino + Next.js

Este repositório une hardware e software em um único projeto de automação residencial. Ele permite monitorar a temperatura e o clima, controlar automaticamente a janela e visualizar tudo isso através de uma página web moderna, hospedada na Vercel.

---

## 📁 Estrutura do Repositório

```
/
├── arduino/           # Código-fonte do Arduino R4 WiFi
│   └── monitoramento_janela.ino
│
├── web/               # Projeto Next.js (página e API)
│   ├── pages/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## 🔧 Funcionalidades

### Arduino (pasta `arduino/`):
- Conecta ao Wi-Fi
- Lê temperatura (DHT11)
- Detecta chuva (simulado ou sensor físico)
- Controla janela automática
- Envia JSON com status para o Next.js via HTTP POST

### Web (pasta `web/`):
- API Routes para `/api/status` e `/api/atualizar`
- Exibe temperatura, status da chuva e janela, e o horário da última ação
- Hospedável na Vercel com deploy automático

---

## 🚀 Como usar

### 1. Clone o repositório
```bash
git clone https://github.com/seuusuario/nome-do-repo.git
cd nome-do-repo
```

### 2. Configure o Arduino
- Edite o `monitoramento_janela.ino` com sua rede Wi-Fi
- Altere a URL da API para a URL do seu site Vercel
- Compile e envie para o Arduino R4 WiFi

### 3. Execute o projeto web
```bash
cd web
npm install
npm run dev
```

### 4. Faça o deploy na Vercel
- Crie uma conta em [vercel.com](https://vercel.com)
- Conecte com seu GitHub
- Escolha este repositório
- Configure a pasta raiz do projeto para `web/`

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
