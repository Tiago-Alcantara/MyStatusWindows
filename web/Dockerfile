# Etapa de build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install
RUN npm install -D tailwindcss postcss autoprefixer

# Copia todos os arquivos da aplicação
COPY . .

# Build do projeto
RUN npm run build

# Etapa final
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
