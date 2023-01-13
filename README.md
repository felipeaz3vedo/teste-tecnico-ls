# TESTE TÉCNICO LS

## ℹ️ Informações sobre o projeto

CRUD fullstack utilizando o padrão Oauth2 de autorização. A escolha do sqlite como banco de dados foi para facilitar a revisão do código sem o uso do Docker.

&nbsp;

▶️ **<a href="https://youtu.be/MR_Z2MWe7jA" target="_blank">preview do projeto no youtube</a>**

&nbsp;

## 🛠️ Linguagens e tecnológias utilizadas no projeto

- [Vite](https://vitejs.dev/)
- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Radix](https://www.radix-ui.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [Google Oauth2](https://developers.google.com/identity/protocols/oauth2)
- [Passport](https://www.passportjs.org/)
- [Axios](https://axios-http.com/ptbr/)

&nbsp;

## ⚙️ Instalação

### Back-end

    yarn

### Banco de dados

    npx prisma studio

### Front-end

    yarn

&nbsp;

## 🚀 Rodar a aplicação

### Pré-requisitos

1. Fazer uma conta no Google Cloud;

2. Configurar a tela de consentimento;

3. Obter uma credencial para utilizar o Google Oauth2;

4. Durante a obtenção das credenciais setar a(s) ulr de redirecionamento e a(s) url autorizadas a fazer solicitações do lado do client;

5. Obter e copiar o client ID, client secret e a url de redirecionamento e colocar em um arquivo .env nas variáveis GOOGLE_CLIENT_ID,
   GOGLE_CLIENT_SECRET e GOOGLE_CALLBACK_URL respectivamente;

6. No mesmo arquivo .env, insira uma senha para o cookie session em uma variável chamada COOKIE_KEY;

7. Por fim, insira o nome da pasta em que o seus arquivos do sqlite irão ficar na variável DATABASE_URL, no caso 'file:./dev.db'.

### Exemplo .env

    COOKIE_KEY=''
    GOOGLE_CLIENT_ID=''
    GOOGLE_CLIENT_SECRET=''
    GOOGLE_CALLBACK_URL=''
    DATABASE_URL='file:./dev.db'

&nbsp;

### Back-end

    yarn start

### Front-end

    yarn dev

# 📨 REST API

## GET

### Adquirir os dados do usuário logado

`GET http://localhost:3333/auth/login/success`

### Listar todos os produtos

`GET http://localhost:3333/products`

&nbsp;

## POST

### Criar um produto

`POST http://localhost:3333/product/user/:id`

`:id = id do usuário logado`

&nbsp;

## PUT

### Editar um produto

`PUT http://localhost:3333/product/:id`

`:id = id do produto a ser editado`

&nbsp;

## DELETE

### Deletar um produto

`DELETE http://localhost:3333/product/:id`

`:id = id do  produto a ser deletado`
