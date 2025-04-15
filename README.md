# MyStatusWindows
Projeto de automação residencial com Arduino R4 WiFi, que monitora a temperatura interna da casa, detecta chuva, controla uma janela automatizada e envia os dados para uma página web em Next.js acessível publicamente.

# 🌡️ Monitoramento de Temperatura e Controle de Janela com Arduino R4 WiFi

Este projeto combina hardware e software para criar uma solução de automação residencial. Usando um Arduino R4 WiFi, sensores de temperatura e chuva, o sistema monitora o ambiente interno e envia os dados para uma aplicação Next.js hospedada na Vercel, permitindo que qualquer pessoa visualize o status da casa em tempo real pela internet.

---

## 🔧 Funcionalidades

- 📶 Conexão automática à rede Wi-Fi
- 🌡️ Leitura da temperatura interna (DHT11/DHT22)
- 🌧️ Detecção de chuva (simulada ou real com sensor)
- 🚪 Controle automatizado de janela (aberta/fechada)
- 🕓 Histórico da última vez que a janela foi fechada
- 🌐 Envio dos dados para uma API REST via HTTP POST
- 💻 Visualização do status em tempo real via página Next.js

---

## 🛠️ Componentes utilizados

- Arduino R4 WiFi
- Sensor DHT11 ou DHT22
- Sensor de chuva (opcional, simulado no código)
- Conexão com rede Wi-Fi
- Projeto Next.js com API integrada (hospedado na Vercel)

---

## 📦 Estrutura do Projeto

### Arduino (este repositório)
- Conecta ao Wi-Fi
- Coleta dados dos sensores
- Monta payload JSON
- Envia os dados via POST para `/api/atualizar` da aplicação Next.js

### Página Web (Next.js)
- Recebe os dados pela API
- Armazena e disponibiliza via endpoint `/api/status`
- Exibe na interface web os dados em tempo real

---

## 🚀 Como usar

### 1. Configure seu Wi-Fi
Edite no código as variáveis com sua rede:

```cpp
char ssid[] = "SUA_REDE_WIFI";
char pass[] = "SUA_SENHA_WIFI";

