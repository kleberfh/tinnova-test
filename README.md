# Teste Tinnova

Este projeto é uma simples aplicação que possui apenas duas páginas, sendo a primeira para a criação e edição
de usuários, e a segunda para a listagem, visualização e exclusão dos usuários criados.

O projeto utiliza do IndexedDB como seu "Banco de dados" local para armezenar e gerenciar os dados de cada usuário cadastrado.

## Instalar dependencias

Para executar este projeto é necessário ter [NodeJS](https://nodejs.org/en/) e [NPM](https://www.npmjs.com/) instalados locamente em sua máquina.

para fazer a instalação das dependencias do projeto basta rodar:

```shell
npm i
```
#### ou para yarn
```shell
yarn
```

## Ferramentas utilizadas

Algumas bibliotecas foram utilizadas para a composição deste projeto, segue abaixo a lista com cada uma e sua função neste projeto.

- *Axios*: Criar instancias e realizar chamadas para API REST.
- *Dexie*: Utilização mais prática e simples do IndexedDB.
- *Dexie React Hooks*: Ferramentas extras intregradas com o React para o Dexie.
- *Framer Motion*: Criar animações complexas de forma mais prática e rápida no React.
- *JS Brasil*: Máscaras e validações de documentos e números no padrão brasileiro.
- *Lodash*: Biblioteca de utilitários para trabalhar de forma mais prática com objetos e coleções de objetos.
- *Lottie React*: Renderizar JSON de animações no React (A animação no menu deste projeto é feita com lottie).
- *Prop Types*: Ferramenta para adicionar tipagem nos componentes deste projeto.
- *Reoverlay*: Utilizado para a criação das modais deste projeto, ajuda a ter um melhor controle e gerenciamento de cada modal.
- *Tailwind CSS*: Framework CSS para criar estilos responsivos com mais práticidade.

Dependencias de desenvolvimento:
- *IndexedDB Shim*: Fornece um "Mock" do IndexedDB para ser utilizado nos testes desta aplicação.
- *Jest Canvas Mock*: Renderiza as animações do Lottie em um canvas, utilizado também para os testes desta aplicação.

### Rodar o projeto

Para rodar este projeto localmente, basta rodar um dos comando abaixo **após fazer a instalação das dependencias.**

```shell
npm run start
```
ou com yarn:
```shell
yarn start
```

### Testes
Este projeto possui testes de componentes e integrações, para executa-los, basta rodar o comando:

```shell
npm run test
```
ou com yarn:
```shell
yarn test
```

## Desenvolvedor

Esté projeto foi desenvolvido e desenhado por [Kleber Fernando](https://www.linkedin.com/in/kleber-fernando/) com base nas instruções fornecidas.
