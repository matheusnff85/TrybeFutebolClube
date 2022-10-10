# Trybe Futebol Clube

O objetivo deste projeto era desenvolver uma API com Typescript seguindo o método TDD e os principios da POO(Programação orientada a objeto) e também os principios de SOLID, o serviço de frontend já desenvolvido esperava apenas o desenvolvimento do backend com a regra de negocio adequada para popular corretamente o frontend, seu banco de dados é gerenciado pelo Sequelize, seguindo a arquitetura MSC.

- Tecnologias utilizadas: Typescript, TDD, POO, Sequelize, Node.js, JWT, Joi, Docker, docker-compose, Mocha, Chai, Sinon, MySQL.


# Funcionamento

Foram desenvolvidas rotas de GET, POST e PATCH para o funcionamento da API, algumas com seus middlewares para validação do token de usuário gerado pelo JWT, são geradas para o front dados sobre as partidas tanto em andamento quanto já finalizadas, além de dados sobre os times e a tabela de lideres, as validações para inserção de dados em sua maioria são validadas pelo JOI, além de terem suas próprias interfaces do typescript.


# Importante

- Caso deseje ver o funcionamento da aplicação localmente siga os procedimentos abaixo:

O frontend utiliza a porta 3000, o backend a 3001 e o banco de dados a 3002, então certifique-se de ter todas elas disponíveis antes de executar o passo abaixo ou altere as mesmas nos seus respectivos arquivos docker-compose na pasta **app**.

Clone o repositório e instale as dependências tanto do frontend quanto do backend rodando o comando: `npm run install:apps` na raiz do projeto, já para visualizar toda a aplicação será necessário ter o docker instalado em sua máquina, após isso só executar o comando: `npm run compose:up` ou `npm run compose:up:dev`(o segundo comando serve para que se algo for alterado o container se atualiza automaticamente, tornando assim desnecessário que ele seja reiniciado caso aja alguma alteração nos arquivos).

Os testes desenvolvidos por mim para o backend podem ser executados entrando na pasta raiz do backend dentro da pasta app, com o comando: `npm run test` ou somente `npm test`.

---

- Desenvolvido por [Matheus Marinho](https://www.linkedin.com/in/matheus-marinhodsp/).